import { response } from "express"
import { CheckInService } from "../../services/POST/CheckInService"



class CheckInController {
  async handle(req , res){
    const {id} = req.params
    const {check} = req.body

    const service = new CheckInService()

    const result = await service.exexute(id , check)


    return res.json(result)
  }
}

export {CheckInController}