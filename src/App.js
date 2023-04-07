import Home from "./pages/Home";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import StudentLeaveForm from "./components/LeaveForm/StudentLeaveForm";
import LeaveStatus from "./components/LeaveForm/LeaveStatus";
// import Attendence from "./components/Home/Attendence";
// import TimeTable from "./components/TimeTable/TimeTable";

const App = () => {





  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home />
        }
        />

        {/* <Route path='/attendance' element={
          <Attendence />
        }
        />


        <Route path='/time-table' element={
          <TimeTable />
        }
        /> */}

        <Route path="/auth/login" element={
          <Login />
        }
        />

        <Route path="/leave-form" element={
          <StudentLeaveForm />
        }
        />
        <Route path="/leave-status" element={
          <LeaveStatus />
        }
        />



      </Routes>
    </div>
  );
}

export default App;
