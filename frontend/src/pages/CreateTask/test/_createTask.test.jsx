import {CreateTask} from '../../CreateTask'
import userEvent from '@testing-library/user-event'
import { queryByTitle, render ,  waitFor} from '@testing-library/react'

describe('testing index in the create task' , ()=> {


  it("should be canceled by clicking", ()=> {
    const {getByText} = render(<CreateTask/>)


    expect(getByText('Cancelar')).toBeTruthy()

  })

  it('should in click e go-to for home ' , async ()=> {
    const {getByText} = render(<CreateTask/>)
    const buttonCancel = getByText('Cancelar')
  })
})