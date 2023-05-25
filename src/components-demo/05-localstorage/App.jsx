import { useState } from "react";

// App idea from https://twitter.com/housecor/status/1268900696604258304

export default function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("users")) || ["default user"]);

  const adduser = () => {
    const updateduser = user.concat("new user");

    setuser(updateduser);
    localStorage.setItem("users", JSON.stringify(updateduser));
  };

  return (
    <div className="users">
      <ul>
        {user.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={adduser}>Add user</button>
    </div>
  );
}
