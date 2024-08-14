import { useState, useEffect } from 'react'
import TodoList from './TodoList'
import axios from 'axios'

export const MainDashboard = () => {
  const [add, setAdd] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoOneList, setTodoOneList] = useState({});
  const [students, setStudents] = useState([{
    name: "Mariene",
    course: "Computer Engineering"
  },
  {
    name: "Kyle Atuel",
    course: "Computer Engineering"
  }
  ]);

  const handleApiCall = () => {
    axios.get(`/todo/list`)
      .then(function(response) {
        setTodoList(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  const handleAddTodo = () => {
    axios.post(`/todo/create`, { ...add, user_id: 1 })
      .then(function(response) {
        setTodoOneList({})
        setTodoList([...todoList, { ...add, user_id: 1 }])
      })
      .catch(function(error) {
        console.log(error.response.data);
      });
  }

  const handleGetOneTodo = () => {
    axios.get(`/todo/view/${add.id}`)
      .then(function(response) {
        setTodoOneList(response.data);
      })
      .catch(function(error) {
        console.log(error.response.data);
      });
  }

  const handleUpdateTodo = () => {
    axios.post(`/todo/update`, add)
      .then(function(response) {
        setTodoList(todoList.map((item) => item.id == add.id ? add : item));
      })
      .catch(function(error) {
        console.log(error.response.data);
      });
  }

  useEffect(() => {
    handleApiCall()
    // handleAddTodo({
    //   description: "Sample 2",
    //   name: "Carlito",
    //   user_id: 1
    // })
    // handleGetOneTodo(1);
    // handleUpdateTodo({
    //   description: "Sample",
    //   name: "Carlito Jr",
    //   id: 2
    // });
    // setTodoOneList({})
  }, [])

  const handleChangeName = (e) => {
    setAdd({ ...add, name: e.target.value })
  }

  const handleChangeId = (e) => {
    setAdd({ ...add, id: e.target.value })
  }

  const handleChangeCourse = (e) => {
    setAdd({ ...add, description: e.target.value })
  }

  const handleAdd = () => {
    if (add.name !== "" && add.description !== "") {
      // setStudents([...students, add])
      handleAddTodo();
      setAdd({ name: "", course: "", id: "" })
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    setStudents(students.filter((_, key) => key !== id))
  }

  return (
    <div style={{ width: "80vw" }}>
      Id:
      <input value={add.id} type="text" onChange={handleChangeId} />
      Name:
      <input value={add.name} type="text" onChange={handleChangeName} />
      &nbsp;Description:
      <input value={add.course} type="text" onChange={handleChangeCourse} />
      {/* <button style={{ marginLeft: 10 }} onClick={handleAdd}>Add</button> */}
      <button style={{ marginLeft: 10 }} onClick={handleApiCall}>Get</button>
      <button style={{ marginLeft: 10 }} onClick={handleAdd}>Add</button>
      <button style={{ marginLeft: 10 }} onClick={handleGetOneTodo}>Get One</button>
      <button style={{ marginLeft: 10 }} onClick={handleUpdateTodo}>Update</button>
      {/* <Card data={students} handleDelete={handleDelete} /> */}
      <TodoList data={todoOneList?.name ? [todoOneList] : todoList} handleDelete={handleDelete} />
    </div>
  );
}

