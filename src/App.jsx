import React from "react";
import Aone from "./Aone";
// import "./Demo.css"
// import styles from "./Task.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Paper, Typography } from "@mui/material";
import State from "./Hooks/State";
import Context from "./Hooks/Context";
import Ref from "./Hooks/Ref";
import Reducer from "./Hooks/Reducer";
import MemoCallback from "./Hooks/MemoCallback";
import Custom from "./Hooks/Custom";
import Form from "./ReactForm/Form";
import Create from "./CRUD/Create";
import { Route, Routes } from "react-router-dom";

export const demoContext = React.createContext("");

function App() {
  // const name="roshni";

  // const [a,b]=Custom(1)

  const ApiLink = "http://68f86972deff18f212b6061b.mockapi.io/idm/users";
  return (
    <div className="bg-primary">
      {/* <h1 className={styles.task}>
        Hello welcome
      </h1>
      <Aone />
      <Paper elevation={1}>
        <h1>Hello</h1>
      </Paper>

      <Typography sx={{
        fontSize:"3rem"
      }}>
        Roshni
      </Typography> */}

      {/* <State /> */}
      {/* <demoContext.Provider value={name}>
          <Context />
        </demoContext.Provider> */}

      {/* <Ref />

        <Reducer />

        <MemoCallback />

        <h3>
          {a}
        </h3>

<button onClick={()=>b()}>
  Click to add
</button> */}
      {/* <Form /> */}

      {/* <Create link={apiLink}/> */}

      <Routes>
        <Route index element={<Form />} />
        <Route path="a" element={<State />} />
        <Route path="context" element={<Context />} />
        {/* <Route path="CRUD" element={<Create Apilink={Apilink}/>}/>   */}
        <Route path="hook">
          <Route path="Ref" element={<Ref />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
