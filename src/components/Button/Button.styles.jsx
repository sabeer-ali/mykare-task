import styled from "styled-components";
import Styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #00bcd4;
  color: white;
  padding: 0.5em 1.5em;
  border-radius: 8px;
  border: 0px solid #fff;
  font-size: 15px;
  width: ${(props) => (props.width ? props.width : "100%")};
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, #00bcd400, #00bcd4, #00bcd400);
    border: 0px solid #00bcd4;
    box-shadow: 4px 4px 3px 2px #c8c8c8;
    transition: all 0.5s ease-out;
  }
`;
