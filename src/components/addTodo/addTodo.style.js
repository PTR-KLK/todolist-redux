import styled from "styled-components";

export const AddTodoForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 0.625rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddTodoTextInput = styled.input`
  padding: 0.5rem;
  font-size: 1.125rem;
  border: 1px solid gray;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  width: 75%;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const AddTodoButton = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: white;
  margin: 0 0 0 0.5rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  font-size: 1.125rem;
  cursor: pointer;
  background-color: #2196f3;
  width: 25%;
  @media (max-width: 768px) {
    margin: 0.5rem 0 0 0;
    width: auto;
  }
`;
