import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Title,
  Form,
  Textarea,
  Button,
} from './styles'

export function CreateTask(){
  const [text , setText] = useState('')

  async function handleCreateTask(event){
    event.preventDefault()


    if(text == ''){
      return alert('campo vazio')
    }

    await axios.post('http://localhost:3001/create',{
      text,
      check: false
    })


    setText('')

  }

  return(
    <Container>
      <Title>To do App</Title>
      <Form >
        <Textarea placeholder='Crie uma nova tarefa' value={text} onChange={e => setText(e.target.value)} />
        <Button onClick={handleCreateTask}>Adicionar task</Button>
        <Link to={'/'}>
          <button className='cancel'>Cancelar</button>
        </Link>
      </Form>

    </Container>
  )
}