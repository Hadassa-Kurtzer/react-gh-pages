import React from 'react';
import './App.css';
const initialValues = {
  title: "",
    text: "",
    date: "",
    isCompleted:false
    
};
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      Title:&nbsp;&nbsp;{todo.title}<br></br>
      Description:&nbsp;&nbsp;{todo.text}<br></br>
      Date:&nbsp;&nbsp;{todo.date}
      <div>
        <button className="btn btn-xs btn-success img-circle" onClick={() => completeTodo(index)}>Complete</button>&nbsp;
        <button className="btn btn-xs btn-danger img-circle" onClick={() => removeTodo(index)}>&#xff38;</button>
      </div>
    </div>
  );
};


function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState(initialValues);
  const [showInfo,setShowInfo]= React.useState(false);
  
  const handleSubmit = e => {
    e.preventDefault();
console.log(value.date)
    if ((!(value.title))||(!(value.text))||(!(value.date)))
    {setShowInfo(true)
      return} 
    console.log(value)
    addTodo(value);
    setShowInfo(false)
    setValue({...initialValues});
    console.log(value)

  };

  
  const handleInputChange = (e) => {
    console.log(value)
  const name = e.target.name 
    const value1 = e.target.value 
  
    setValue({
      ...value,
      [name]: value1,
    });
    console.log(value)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="div1"  text-align="center">
      <h7>What do you need to do?</h7><br></br>
      <div className="todo col-md-12" text-align="center">
        <input
          type="text"
          name="title"
          className="form-control"
          value={value.title}
          placeholder="Your title of task:"
          onChange={handleInputChange}
          // onChange={e => setValue({title:e.target.value})}
        />
        
       <input
        type="text"
        name="text"
        className="form-control"
        value={value.text}
        placeholder="Description of task:"
        onChange={handleInputChange}
      />
     
      <input
        type="text"
        name="date"
        className="form-control"
        value={value.date}
        placeholder="The date of a task: "
        onChange={handleInputChange}
      /> 
      
      </div>
      <div style={{ display: showInfo ? "block" : "none" }}><strong style={{color: "red"}}>Please enter all the details of task</strong></div>
       <button className="btn btn-xs btn-success img-circle">Add a new task!</button>
       </div>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false, title: "Studies", date: "10/04/21"
    },
    {
      text: "Buy a wedding dress",
      isCompleted: false, title: "Shopping", date: "10/04/21"
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      title: "Studies", date: "10/04/21"
    }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = value => {
    const todo={title:value.title,text:value.text,date:value.date,isCompleted:value.isCompleted}
    const newTodos = [...todos, todo];
    // const newTodos = [...todos, { title:value.title,text:value.text,date:value.date,isCompleted:value.isCompleted }];
    console.log(newTodos)
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (

    <div className="app ">
      <div className="todo-list">
      <hr></hr>
        <label >My tasks:</label>
        <hr></hr>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}</div>
        <div className="todo-list">
        <hr></hr>
        <label >New task</label>
        <hr></hr>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>

  );
}

export default App;
