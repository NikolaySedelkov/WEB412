import { Clicker } from "./components/Clicker";
import { DropDown } from "./components/DropDown";

export function App() {
  return (
    <>
      <Clicker/>
      <DropDown 
        label='Триггер-текст' 
        options={[
          "Меню", "О нас", "Каталог"
        ]}
      />
    </>
  )
}