
import './App.css';
import Header from "./Mycomponents/Header";
import {Footer} from "./Mycomponents/Footer";
import {Todos} from "./Mycomponents/Todos";
import {Add} from './Mycomponents/Add';
import React,{useState} from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i am on delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const addtodo=(title)=>{
    let sno=0;
    console.log("adding a todo");
    if(todos.length==0){
      sno=0;
    }
    else{
    let sno=todos[todos.length-1].sno+1
     }
      const mtodo={
      sno:sno,
      title:title
    }
    setTodos([...todos,mtodo]);

  }
  const [todos, setTodos] = useState([
    {
      s:1,
      title:"Go to gym"
    },
    {
      s:2,
      title:"Go to market"
    },
    {
      s:3,
      title:"Go to college"
    }
  ])
  return (
    <>
      <Header title="My todos list"/>
      <Add addtodo={addtodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
