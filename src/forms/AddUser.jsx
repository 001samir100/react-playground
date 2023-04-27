import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      console.log(`input received: ${name} and ${email}`);
      const user = { id: new Date().getTime().toString(), name, email };
      setUsers((u) => {
        return [...u, user];
      });

      setName("");
      setEmail("");

      console.log(`Data in array: ${users}`);
    } else {
      console.log("value is empty");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="submit" value="Save"></input>
      </form>

      {users.map((user) => {
        const { id, name, email } = user;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AddUser;
