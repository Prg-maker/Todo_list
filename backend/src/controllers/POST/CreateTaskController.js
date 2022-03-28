import { CreateTaskServices } from "../../services/POST/CreateTaskServives"



class CreateTaskController {
  async handle(req , res){
    const {text , check } = req.body


    const service = new CreateTaskServices()


    const result = await service.execute(text , check)

    return res.json(result)

  }
}

export {CreateTaskController}