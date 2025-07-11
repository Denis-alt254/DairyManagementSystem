import Navbar from "./components/Navbar";
import Tasks, { AddTasksForm, UpdateAndDeleteTask } from "./pages/Tasks";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import {Cows, AddCowForm, UpdateAndDeleteForm} from "./pages/Cows";
import { Dashboard } from "./pages/Dashboard";
import { AddExpenseFrom, Expenses, Summary } from "./pages/Expenses";
import { AddMilkRecordForm, Milk } from "./pages/Milk";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App(){
  return(
    <div className="background">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="main">
        <div className="nav">
        <Navbar />
        </div>
        <main>
          <Routes>
            <Route path="/cows" element = {<Cows />}></Route>
            <Route path="/addcow" element={<AddCowForm />}/>
            <Route path="/updatedelete" element={<UpdateAndDeleteForm />}/>
            <Route path="/tasks" element={<Tasks />}/>
            <Route path="/addtask" element={<AddTasksForm />}/>
            <Route path="/updatedeletetasks" element={<UpdateAndDeleteTask />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/addexpense" element={<AddExpenseFrom />}/>
            <Route path="/expenses" element={<Expenses />}/>
            <Route path="/summary" element={<Summary />}/>
            <Route path="/milk" element={<Milk />}/>
            <Route path="/addmilk" element={<AddMilkRecordForm />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      
    </div>
  )
}

export default App;