import {
  useEffect, useState
} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import { Task } from "../components/Task";
import { Container , Title , Separete , ContentTask , Button , CheckIcon , ContainerTask , Delete} from "./styles";


export function ListTasks(){

  const [tasks , setTasks] = useState([])


  useEffect(()=> {
    
    async function get(){


      const {data} = await axios.get('http://localhost:3001/')

      setTasks(data)
      

    }


    get()


  } , [])


  async function Checking(id){
     await axios.put(`http://localhost:3001/check/${id}`, {
      check: true
    })      


    document.location.reload()

  }

  async function handleDelete(id){
    await axios.delete(`http://localhost:3001/delete/${id}`)
    document.location.reload()
  }
  


  return(
    <Container>
      <Title>To do App</Title>


      <Link to="/create">
        <Button>create new task</Button>
      </Link>


      <Separete/>

      <ContentTask>
        {
          tasks.map(task=> {
            return(


              <ContainerTask
                key={task.id}
                isCheck={task.check}
              >

                {task.check ? 
                
                
                <Delete
                  onClick={()=> handleDelete(task.id)}
                /> 
                
                : 
                
                <CheckIcon 
                  onClick={()=> Checking(task.id)} 
                  isCheck={task.check}
                />
                
                }

                
              
                <Task
                  key={task.id}
                  title={task.text}
                  
                />
              </ContainerTask> 
             
              
            )
          })
        }

      </ContentTask>


    </Container>
  )
}