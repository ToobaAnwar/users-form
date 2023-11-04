import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  let list = false;
  if (props.users.length > 0) {
    list = true;
  }
  return (
    <div>
      {list && (
        <Card className={classes.users}>
          <ul>
            {props.users.map((user) => (
              <li>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default UsersList;
