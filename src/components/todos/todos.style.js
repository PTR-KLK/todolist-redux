import styled from "styled-components";

export const TodoContainer = styled.div`
  text-align: center;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255, 0.8);
  border: 1px solid #eee;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 10px;
  margin: 2rem auto; 
  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
    margin: 0rem auto; 
  }
`;

export const TodoElement = styled.div`
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodoText = styled.p`
  text-decoration: ${(props) => (props.active ? "line-through" : "none")};
  color: ${(props) => (props.active ? "green" : "black")};
`;

export const TodoTextInput = styled.input`
  margin-bottom: 0.625rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  border: 1px solid gray;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
`;

export const TodoSelect = styled.select`
  background-color: white;
  margin-bottom: 0.625rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  border: 1px solid gray;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
`;

export const TodoCheckbox = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background: ${(props) => (props.active ? "#2196F3" : "#eee")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 10px;
  min-width: 50px;
  align-self: center;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  margin: 4px 2px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 40px;
  }
`;

export const TodoButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  min-width: 50px;
  align-self: center;
  font-size: 1.5rem;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #f44336;
  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 40px;
  }
`;
