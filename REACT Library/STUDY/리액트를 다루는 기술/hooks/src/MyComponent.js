import { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(this.id);
  };
  return <div>refsample</div>;
};

export default RefSample;
