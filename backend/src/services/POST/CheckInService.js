import { prismaClient } from "../../prisma";


class CheckInService{
  async exexute(id , check){
    const isCheck = await prismaClient.task.update({
      where:{
        id
      },
      data:{
        check
      }
    }) 

    return isCheck
  }
}

export {CheckInService}