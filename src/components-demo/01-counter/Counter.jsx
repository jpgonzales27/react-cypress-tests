import { useState } from "react";
import styled from "styled-components";

export default function Stepper({ initial = 0, onChange = () => {} }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <Button data-cy="decrement" className="btn btn-primary" onClick={handleDecrement}>
        -
      </Button>
      <Span data-cy="counter">{count}</Span>
      <Button data-cy="increment" className="btn btn-warning" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  font-size: 20px;
`;

const Span = styled.span`
  font-size: 30px;
`;
