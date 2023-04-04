import { PrismaClient } from '@prisma/client'
import useFiles from '~~/helpers/useFiles'
// const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // const { files, fields }:any = await useFiles(event)
  // console.log('files', files)
  // console.log('fields', fields)
  await useFiles(event)
  console.log('event.context', event.context)
  return { ok:true }
})