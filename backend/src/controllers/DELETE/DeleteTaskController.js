import { DeleteTaskService } from "../../services/DELETE/DeleteTaskService"



class DeleteTaskController {
  async handle(req , res){
    const {id} = req.params


    const service = new DeleteTaskService()

    const result = await service.execute(id)

    return res.json(result)
  }
}

export {DeleteTaskController}