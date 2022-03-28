import styled from 'styled-components';
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti' 
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

export const  Button = styled.button`
  height: 32px;
  cursor: pointer;
  padding: 5px;
  background: #3F72AF;
  color: white;
  border-radius: 4px;
  transition: .2s;
  &:hover{
    filter: brightness(0.9);
  }
`


export const Separete = styled.div`
  width: 90%;
  opacity: 0.2;
  margin-top: 15px;
  border-bottom: 2px solid black;
`


export const  ContentTask = styled.div`
  margin-top: 20px;
`


export const CheckIcon = styled(AiOutlineCheckCircle)`
  position: relative;
  width: 25px ;
  height: 25px;
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-left: 20px;
  color: green;

  display: ${props => props.isCheck ? "none" : ""} ;

`

export const ContainerTask = styled.div`
  background-color: #4F9FFF;
  width: 490px;
  min-height: 55px;
  border-radius: 5px;   
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${props => props.isCheck ? "#DBE2EF" : "#4F9FFF"} ;
`


export const Delete = styled(TiDeleteOutline)`
  color: #FF0000;
  position: relative;
  width: 25px ;
  height: 25px;
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-left: 20px;
`