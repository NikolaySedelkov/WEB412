import { Component } from "react";

export function App() {
  return (
    <h1>Hello <i>world!</i></h1>
  )
}

export const OtherComponent = () => {
  return (
    <h2>Second component</h2>
  )
}

export class ClassesComponent extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <h3>Классовый компонент</h3>
    )
  }
} 
