import { render } from "@testing-library/react"
import {Task} from '../Task'

describe('testing task' , ()=> {
  it('should watch in props' , ()=> {
    const {getByText} = render(<Task/>)


    expect(getByText('Hello,world')).toBeTruthy()

  })
})