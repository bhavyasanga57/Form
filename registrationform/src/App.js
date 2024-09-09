import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState(
    {
      firstName:"",
      lastName:"",
      email:""
    }
  );
  const [submitted,setSubmitted]=useState(false);
  const [valid,setValid]=useState(false);
  const handleFisrtName=(event)=>{
    setValue({...value,firstName:event.target.value})

  }
  const handleLastName=(event)=>{
    setValue({...value,lastName:event.target.value})

  }
  const handlEmail=(event)=>{
    setValue({...value,email:event.target.value})

  }
  const handleSubmit=(event)=>{
event.preventDefault();
if(value.firstName && value.lastName && value.email){
  setValid(true);
}
setSubmitted(true);
  }
  return (
    
    <div className="form-container">
<form className="registration-form" onSubmit={handleSubmit}>
  {submitted && valid ?<div className="success-message">Success! Thank you for Registration</div>:null}
  <input
  className="form-field"
  placeholder="First Name"
  name="firstName"
  value={value.firstName}
  onChange={handleFisrtName}
  />
  {submitted && !value.firstName?<span>Please Enter First Name</span>:null}
  <input
  className="form-field"
  placeholder="Last Name"
  name="lastName"
  value={value.lastName}
  onChange={handleLastName}
  />
   {submitted  && !value.lastName?<span>Please Enter Last Name</span>:null}
  <input
  className="form-field"
  placeholder="Email"
  name="email"
  value={value.email}
  onChange={handlEmail}
  />
   {submitted  && !value.email?<span>Please Enter Email</span>:null}

  <button>Register</button>

</form>
    </div>
  );
}

export default App;
