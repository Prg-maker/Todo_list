import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Container,
  TaskTitle,

} from './styles'

export function Task({title}){

  

  return(

    <Container>
      <TaskTitle >{title}</TaskTitle>
    </Container>
   
  )
}