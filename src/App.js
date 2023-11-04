import React, { useState } from "react";
import AddUsers from "./Components/Components/AddUsers";
import UsersList from "./Components/Components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  // lifting state up  --> passing this function in <AddUsers /> and the users array will recv in <App />
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
