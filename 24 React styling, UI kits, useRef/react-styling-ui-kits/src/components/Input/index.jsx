import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border-color: red;
  padding: 10px 15px;
  margin-left: 20px;
`;
const StyledButton = styled.button`
  color: white;
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: blue;
      transition: 0.3s;
      &:hover {
        background-color: skyblue;
      }
    `}
  ${(props) =>
    props.success &&
    css`
      color: white;
      background-color: green;
      transition: 0.3s;
      &:hover {
        background-color: seagreen;
      }
    `}
${(props) =>
    props.danger &&
    css`
      color: white;
      background-color: red;
      transition: 0.3s;
      &:hover {
        background-color: darkred;
      }
    `}
`;

const Input = () => {
  return (
    <>
      <StyledInput placeholder="search" />
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton success>Success Button</StyledButton>
      <StyledButton danger>Success Button</StyledButton>
    </>
  );
};

export default Input;
