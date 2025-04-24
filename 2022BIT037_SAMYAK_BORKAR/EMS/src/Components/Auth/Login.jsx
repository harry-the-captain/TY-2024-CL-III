import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-green-600 border-2 p-20 rounded-4xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-500 uppercase">Welcome Back</h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-3 rounded-4xl border-green-500 p-3 placeholder: text-white outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className="border-3 rounded-4xl border-green-500 p-3 mt-10 outline-none"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="bg-green-500 px-9 py-3 text-white rounded-4xl mt-10 text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
