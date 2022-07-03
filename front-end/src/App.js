import "./App.css";
import Form from "./pages/Form";
import FormEdit from "./pages/FormEdit";
import FormRead from "./pages/FormRead";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box-form">
          Form Player baru
          {<Form />}
        </div>
        <div className="box-form">
          Form edit Player
          {<FormEdit />}
        </div>
        <div className="box-form">
          Form pencarian Player
          {<FormRead />}
        </div>
      </header>
    </div>
  );
}

export default App;
