import { useState } from "react";
import "../App.css";

function FormEdit() {
  const [tampil, setTampil] = useState(false);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");

  function submit(event) {
    event.preventDefault();
    setTampil(true);
    setNama(document.getElementById("nama").value);
    setUmur(document.getElementById("umur").value);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label for="nama">
          Nama:
          <input type="text" id="nama" name="nama" />
        </label>
        <br />
        <label for="umur">
          Umur :
          <input type="umur" id="umur" name="umur" />
        </label>
        <br />
        <button type="submit"> Edit </button>
      </form>
      <p>
        {tampil && (
          <>
            <div className="box-view">
              <span>Nama</span> : {nama}
              <br />
              <span>Umur</span> : {umur}
            </div>
          </>
        )}
      </p>
    </>
  );
}

export default FormEdit;
