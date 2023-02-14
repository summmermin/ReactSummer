import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List";
import Customer from "./pages/Customer";
import TodoList from "./pages/TodoList"

const customer = {
    'id': 'user1',
    'image': 'https://picsum.photos/id/237/100/100',
    'name': 'summer',
    'birthday': '10/10',
    'gender': 'f',
    'job': 'developer'
}

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link
                to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | <Link
                to="/customer">Customer</Link> | <Link to="/todolist">TodoList</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/input" element={<Input/>}/>
                <Route path="/input2" element={<Input2/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/customer" element={<Customer
                    id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    gender={customer.gender}
                    job={customer.job}
                    birthday={customer.birthday}
                />}/>
                <Route path="/todolist" element={<TodoList/>}/>
            </Routes>
        </div>
    );
}

export default App;
