import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const UseEffectSecondArg = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // when we update value re-render occours.
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []); // always use dependency array [] to prevent loop of calling getUsers();
  return (
    <div>
      <h2>Github users</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div key={id}>
              <li>
                <img src={avatar_url} alt="ImageOfUser" />
                <h4>{login}</h4>
                <p>{html_url}</p>
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectSecondArg;
