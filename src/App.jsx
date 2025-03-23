import { Clicker } from "./components/Clicker";
import { DropDown } from "./components/DropDown";
import { Form } from "./components/Form/Form";
import { Gallery } from "./components/Gallery";

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
      <Form onSubmit={(data)=>alert(JSON.stringify(data, undefined, 2)) }/>
      <Gallery/>
    </>
  )
}