import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const data = await readMultipartFormData(event)
  console.log(data)
  return { ok:true }
})