import React, { useState } from "react";

const DynamicInput = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, id: new Date().getTime().toString() };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={user.age || ""}
          onChange={handleChange}
        />
        <button type="submit">You are good to go</button>
      </form>

      {/* {users.map((user) => {
        const { id, name, email } = user;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </div>
        );
      })} */}
    </div>
  );
};
export default DynamicInput;
