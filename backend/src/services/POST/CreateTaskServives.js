import { prismaClient } from "../../prisma";

class CreateTaskServices {
  async execute(text , check){
    const create = await prismaClient.task.create({
      data:{
        text,
        check
      }
    }) 


    return create
  }
}

export {CreateTaskServices}