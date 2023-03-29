import { createRouter, defineEventHandler, useBase } from 'h3'
// import { userController } from '~~/controllers/userController'
const router = createRouter()

router.get('/users', defineEventHandler(userController.getUsers))
router.get('/users/:id', defineEventHandler(userController.getUser))
router.post('/users', defineEventHandler(userController.setUser))
router.put('/users/:id', defineEventHandler(userController.updateUser))
router.delete('/users/:id', defineEventHandler(userController.deleteUser))

router.get('/posts', defineEventHandler((event) => {return {method:getMethod(event)}}))
router.get('/posts/:id', defineEventHandler(() => 'Hello World'))
router.post('/posts', defineEventHandler(() => 'Hello World'))
router.put('/posts/:id', defineEventHandler(() => 'Hello World'))
router.delete('/posts/:id', defineEventHandler(() => 'Hello World'))


export default useBase('/api', router.handler)