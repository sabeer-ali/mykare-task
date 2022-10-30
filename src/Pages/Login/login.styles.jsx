import Styled from "styled-components";

const Error = Styled.span`
color : red;
margin: 10px 0;
`;

const Row = Styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Center = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 98vh;
`;

const Column = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: ${(props) => (props.height ? props.height : "auto")}; 
    width : ${(props) => (props.width ? props.width : "100%")};
    
    @media (max-width: 426px) {
        width : 80%;        
      }
`;
const Input = Styled.input`
    padding: 10px 12px;
    border-radius: 10px;
    border: 0;
    width: auto;
    box-shadow: 0px 0px 3px 0px #b6b6b6;
    height: 2em;
    
`;

export { Input, Column, Center, Row, Error };
