import React, { useState } from "react";

const Form = () => {


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const[ formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
  })


  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData.name);
  console.log(setName);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input type="text" value={formData.name} onChange={handleName}></input>
      </label>
      <label>
        Email:
        <input type="text" value={formData.email} onChange={handleEmail}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={handlePassword}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
