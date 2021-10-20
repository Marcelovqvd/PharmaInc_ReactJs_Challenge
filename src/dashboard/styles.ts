import styled, { css } from 'styled-components';
import { TableCell } from '@material-ui/core';

interface ButtonProps {
  gender: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;  
` 
export const ButtonContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      span {
        font-size: 20px;
      }
      svg{
        margin-right: 15px;
      }
    }
 `

export const ActionsButtons = styled.div`
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 15px;
    margin: 5px;
  }
`
export const InputSection = styled.div`
  width: 60%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  padding: 15px;
  background-color:#fff;

  svg {
    background-color:#fff;
    height: 50px;
  }

  input {
    width: 100%;
    border: solid 2px;
    height: 50px;
    padding: 20px;
    background-color:transparent;
  }
`
export const FilterContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
export const ButtonGenderMale = styled.button<ButtonProps>`
    background-color: #ffff;
    border: none;
    border-radius: 10px;

    margin-right: 18px;
    margin-bottom: 18px;
    width: 120px;
    height: 40px;
    ${props => props.gender === 'male' && css`
    background-color: black;
    color: #fff;
    `
    }
` 
export const ButtonGenderFemale = styled.button<ButtonProps>`
    background-color: #ffff;
    border: none;
    border-radius: 10px;

    margin-bottom: 18px;
    width: 120px;
    height: 40px;
    ${props => props.gender === 'female' && css`
    background-color: black;
    color: #fff;
    `
    }
` 
export const NationalityContainer = styled.div`
  display: flex;
  align-items:center;
  margin-bottom: 18px;
  margin-left: 22px;
  p {
    margin-right: 16px;
  }
  select {
    border: none;
    width: 64px;
    height: 40px;
    border-radius: 10px;
  }
` 
export const StyledHeadTableCell = styled(TableCell)`
  background-color: black;
  border: 1px solid #ffff;
  p {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
`

export const StyledBodyTableCell = styled(TableCell)`
    p {
      font-size: 14px;
      text-align: center;
  }
  div { 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: transparent;
      border: none;
    }
    > button {
      margin-left:16px;
    }
  }
`