import Busboy from 'busboy'
import path from 'path'
import fs from 'fs'

const useFiles = async (event:any) => {
  const { req } = event
  if (req.method === 'POST') {
  return new Promise((resolve) => {
    const files = [] as any
    const fields = {} as any
    const busboy = Busboy({ headers: req.headers })
    busboy.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info
      console.log(`File [${name}]: filename: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`)
      const saveTo = path.join(process.cwd(), 'public', `busboy-upload-${info.filename}`)
      // console.log('saveTo', saveTo)
      file.pipe(fs.createWriteStream(saveTo))
      file.on('end', () => {
        files.push({
          fieldname: name,
          filename,
          encoding,
          mimetype: mimeType,
        })
      })
    })
    busboy.on('field', (name, value, info) => {
      fields[name] = value
    })
    busboy.on('finish', () => {
      event.context.files = files
      event.context.fields = fields
      // resolve({ files, fields })
    })
    req.pipe(busboy)
  })
  }
}

export default useFiles