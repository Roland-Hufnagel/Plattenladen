import styled from "styled-components";

export default function Button() {
  return <StyledButton type="button">Add</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 50%;
  background-color: pink;
  padding: 0.3rem;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
