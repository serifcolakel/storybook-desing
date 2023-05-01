import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section<{
  background?: string;
}>`
  padding: 4em;
  background: ${(props) => props.background || "papayawhip"};
  color: ${(props) => (!!props.background ? "white" : "black")};
`;

const Button = styled.button`
  display: inline-block;
  color: #f0f;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #f0f;
  border-radius: 3px;
  display: block;
  border-radius: 0.25em;
  &:hover {
    color: white;
    background-color: #f0f;
  }
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button onClick={() => alert("Hello World!")}>Normal Button</Button>
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
    </Wrapper>
  );
}

export default App;
