import {prismaClient} from '../../prisma'

class GetTaskServices{
  async execute(){
    const allTasks = await prismaClient.task.findMany()


    return allTasks
  }

}

export {GetTaskServices}