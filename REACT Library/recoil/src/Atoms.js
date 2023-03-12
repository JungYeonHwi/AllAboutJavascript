import { atom, selector } from "recoil";

const tempFahrenheit = atom({
  key: "tempFahrenheit",
  default: 32,
});

const tempCelsius = selector({
  key: "tempCelsius",
  get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({ set }, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
});

export { tempFahrenheit, tempCelsius };
