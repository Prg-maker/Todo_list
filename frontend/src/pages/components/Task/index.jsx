import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Container,
  TaskTitle,

} from './styles'

export function Task(props){

  

  return(

    <Container   >
      <TaskTitle >{props.title}</TaskTitle>
    </Container>
   
  )
}