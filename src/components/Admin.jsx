import React, { useState } from "react";

function Admin() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });
  
  const [visible, setVisible] = useState(true);

  function handleUpdate(event) {
    //const inputName = event.target.name; fName, lName
    //const newValue = event.target.value;

    const { value, name } = event.target;

    setfullName((prev) => {
      if (name === "fName") {
        //note: Don't access event inside state setter..like if(event.target.name) inside setfullName
        return {
          fName: value,
          lName: prev.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
        };
      }
    });
  }

  function handleVanish(event){
    event.preventDefault();
    setVisible(false);
  }

  return (
    <div className="header">
      <h1>
        Hello {fullName.fName} {fullName.lName} {!visible&&"!"}
      </h1>
      {visible && (
      <form>
        <input
          onChange={handleUpdate}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleUpdate}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button onClick={handleVanish}>Submit</button>
      </form>)}
    </div>
  );
}

export default Admin;