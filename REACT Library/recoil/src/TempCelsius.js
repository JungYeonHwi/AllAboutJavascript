import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { tempFahrenheit, tempCelsius } from "./Atoms.js";

function TempCelsius() {
  const [tempC, setTempC] = useRecoilState(tempCelsius);
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const originTempC = useRecoilValue(tempCelsius);
  const originTempF = useRecoilValue(tempFahrenheit);

  const addTenCelsius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);

  return (
    <div>
      Temp (Celsius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <button onClick={addTenCelsius}>Add 10 Celsius</button>
      <br />
      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
      <br />
      <p>{`originC : ${originTempC} / originB : ${originTempF}`}</p>
    </div>
  );
}

export default TempCelsius;
