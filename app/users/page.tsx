import React from "react";
import AddToCart from "../components/AddToCard";
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // no caching when we want to have a fresh data
    cache: "no-store",
    // caching after certain amount of time in this case 10s
    //next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="salam">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat
        voluptates recusandae veniam nisi libero eius quasi iure consequuntur
        perferendis, numquam, suscipit voluptate quo! Fugit corrupti earum fuga
        natus odio.
      </p>
      <h2>
        {" "}
        this is where I need to modify the button click to make sure it can go
        back to the previous page
      </h2>
      <AddToCart />
    </>
  );
};

export default UsersPage;
