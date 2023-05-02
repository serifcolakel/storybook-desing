import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./stories/Button";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section<{
  backgroundColor?: string;
}>`
  padding: 4em;
  background: ${({ backgroundColor }) => backgroundColor ?? "cyan"};
  color: ${({ backgroundColor }) =>
    backgroundColor === undefined ? "white" : "black"};
`;

const Button2 = styled.button`
  display: inline-block;
  color: #f0f;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #f0f;
  background-color: white;
  border-radius: 3px;
  display: block;
  border-radius: 0.25em;
  &:hover {
    color: white;
    background-color: #f0f;
  }
`;

const TomatoButton = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;

function App(): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor((prev) => {
        switch (prev) {
          case undefined:
            return "red";
          case "green":
            return "blue";

          default:
            return "white";
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <Button radius="full">Normal Button</Button>
      <Title>{backgroundColor}</Title>
      <Button2
        onClick={() => {
          alert("Hello World!");
        }}
      >
        Normal Button
      </Button2>
      <Button2 as="a" href="#">
        Link with Button styles
      </Button2>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
    </Wrapper>
  );
}

export default App;
