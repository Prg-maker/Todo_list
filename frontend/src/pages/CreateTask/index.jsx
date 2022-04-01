import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Container,
  Title,
  Form,
  Textarea,
  Button,
  Link
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

  function handleClick(){
  }

  return(
    
    <Container>
      <Title>To do App</Title>
      <Form >
        <Textarea placeholder='Crie uma nova tarefa' value={text} onChange={e => setText(e.target.value)} />
        <Button onClick={handleCreateTask}>Adicionar task</Button>
          <Link placeholder='Cancelar' className='cancel' href='/'>
            Cancelar
          </Link>

      </Form>

    </Container>
  )
}