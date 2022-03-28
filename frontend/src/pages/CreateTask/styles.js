import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  min-height: 450px;
  background: #fff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px; 
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 57px 0;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: #112D4E;
  margin-top: 20px;
  margin-bottom: 10px;
  position: sticky;
  top: 0  ;
  width: 100%;
  background: white;
  text-align: center;
  z-index: 2;
` 

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .cancel{
    width: 185px;
    height: 32px;
    background: #FF0000;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    margin-top: 20px;
    &:hover{
      filter: brightness(0.9);
    }
  }
`
export const Textarea = styled.textarea`
 
  resize: inherit;
  width: 490px;
  height: 180px;
  background: #DBE2EF;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
`
export const Button = styled.button`
  margin-top: 50px;
  width: 185px;
  height: 32px;
  background: #3F72AF;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    filter: brightness(0.9);
  }
`

