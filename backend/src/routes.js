import {Router} from 'express'

import {CreateTaskController} from './controllers/POST/CreateTaskController'
import {CheckInController} from './controllers/POST/CheckInController'
import {GetTaskController} from './controllers/GET/GetTaskController'
import {DeleteTaskController} from './controllers/DELETE/DeleteTaskController'



const routes = Router()


routes.get('/' , new GetTaskController().handle)
routes.post('/create' , new CreateTaskController().handle)
routes.delete('/delete/:id' , new DeleteTaskController().handle )

routes.put('/check/:id' , new CheckInController().handle)


export {
  routes
}