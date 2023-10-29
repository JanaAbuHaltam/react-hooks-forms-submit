import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [formDataArray, setformDataArray] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit (e){
    e.preventDefault()
    if(firstName.length > 0 ){
      const formData = {
        firstName : firstName,
        lastName : lastName
      }
      const data = [...formDataArray, formData]
      setformDataArray(data)
      setFirstName("")
      setLastName("")
      setErrors([])
    }else{
      setErrors(["First Name is requird!"])
    }
  }
  const displyUsers = formDataArray.map((item,index)=> {
    return(
      <div key={index}>
        {item.firstName} {item.lastName}
      </div>
    )
  })
  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
   
      {errors.length > 0
        ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
        : null}
        <h3>Submitions users</h3>
      {displyUsers}
    </>
  );
}

export default Form;
