import {createGlobalStyle} from 'styled-components';


export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,button,input{
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
  }

  html,body,#root{
    height: 100vh;
    background: #3F72AF;
    display: flex;
    justify-content: center;
  }

`
