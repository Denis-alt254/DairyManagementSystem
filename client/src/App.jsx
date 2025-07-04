import Navbar from "./components/Navbar";
import Tasks, { AddTasksForm } from "./pages/Tasks";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import {Cows, AddCowForm, UpdateAndDeleteForm} from "./pages/Cows";
import { Dashboard } from "./pages/Dashboard";
import { AddExpenseFrom, Expenses } from "./pages/Expenses";
import { AddMilkRecordForm, Milk } from "./pages/Milk";

function App(){
  return(
    <div className="background">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element = {<Cows />}></Route>
          <Route path="/addcow" element={<AddCowForm />}/>
          <Route path="/updatedelete" element={<UpdateAndDeleteForm />}/>
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="/addtask" element={<AddTasksForm />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/addexpense" element={<AddExpenseFrom />}/>
          <Route path="/expenses" element={<Expenses />}/>
          <Route path="/milk" element={<Milk />}/>
          <Route path="/addmilk" element={<AddMilkRecordForm />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;