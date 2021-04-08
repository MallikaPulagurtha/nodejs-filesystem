import './App.css';
import User from "./user";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [dirlist, setDirlist] = useState([]);

  useEffect(async () => {
    let dirs = await axios.get("http://localhost:8080/directories");
    setDirlist(dirs.data);

  }, [])
  return (
    <>
      <h1>Files in the Path</h1>
      <hr></hr>
      <div className="row">
        {
          dirlist.map((item) => {
            return <User data={item}></User>
          })
        }
      </div>
    </>
  );
}

export default App;
