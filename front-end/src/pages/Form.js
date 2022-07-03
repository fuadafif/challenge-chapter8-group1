import { useState } from "react";
import "../App.css";

function Form() {
  const [tampil, setTampil] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();
    setTampil(true);
    setUsername(document.getElementById("username").value);
    setPassword(document.getElementById("password").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="username">
          Username:
          <input type="text" id="username" name="username" />
        </label>
        <br />
        <label for="password">
          Password :
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <button type="submit"> Submit </button>
      </form>
      <p>
        {tampil && (
          <>
            <div className="box-view">
              <span>Username</span> : {username}
              <br />
              <span>Password</span> : {password}
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default Form;
