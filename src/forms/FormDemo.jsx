import React, { useState } from "react";

const FormDemo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`name: ${name} and age: ${age}`);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="number" name="age" value={age} onChange={handleAge} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDemo;
