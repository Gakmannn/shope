import type { H3Event } from 'h3'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getUsers = (event: H3Event) => {
  return { method: getMethod(event) }
}
const getUser = (event: H3Event) => {

}
const setUser = (event: H3Event) => {

}
const updateUser = (event: H3Event) => {

}
const deleteUser = (event: H3Event) => {

}

export const userController = { getUsers, getUser, setUser, updateUser, deleteUser }