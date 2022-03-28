import { GetTaskServices } from "../../services/GET/GetTaskServices";



class GetTaskController{
  async handle(req , res){
    const service = new GetTaskServices()


    const result = await service.execute()

    return res.json(result)

  }
}

export {GetTaskController}