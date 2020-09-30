import React from "react";
function LoginScreen() {
  const submitHandler = () => {};
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>UserName</label>
        <input type="text" placeholder="username"></input>
        <label>Password</label>
        <input type="text" placeholder="password"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default LoginScreen;
