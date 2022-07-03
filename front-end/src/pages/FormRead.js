import { useState } from "react";
import "../App.css";

function FormEdit() {
  const [tampil, setTampil] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExp] = useState("");
  const [level, setLevel] = useState("");

  function submit(event) {
    event.preventDefault();
    setTampil(true);
    setName(document.getElementById("name").value);
    setEmail(document.getElementById("email").value);
    setExp(document.getElementById("exp").value);
    setLevel(document.getElementById("level").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="name">
          Name:
          <input type="name" id="name" name="name" />
        </label>
        <br />
        <label for="email">
          Email :
          <input type="email" id="email" name="email" />
        </label>
        <br />
        <label for="exp">
          Experience :
          <input type="exp" id="exp" name="exp" />
        </label>
        <br />
        <label for="level">
          Level :
          <input type="level" id="level" name="level" />
        </label>
        <br />
        <button type="submit"> Search </button>
      </form>
      <p>
        {tampil && (
          <>
            <div className="box-view">
              <span>Name</span> : {name}
              <br />
              <span>Email</span> : {email}
              <br />
              <span>Experience</span> : {experience}
              <br />
              <span>Level</span> : {level}
              <br />
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default FormEdit;
