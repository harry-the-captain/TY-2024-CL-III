import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setloggedInUser] = useState(null)
  const AuthData = useContext(AuthContext)


  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "Admin@123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({role:'admin'}))
    } else if (AuthData) {
      const employee = AuthData.employeess.find((e)=>email==e.email && password == e.password)
      if(employee){
        setUser("employee")
        setloggedInUser(employee)
        localStorage.setItem("LoggedInUser", JSON.stringify({role:"employee"}))
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : user == "employee" ? <EmployeeDashboard data={loggedInUser}/> : ""}
    </>
  );
};

export default App;
