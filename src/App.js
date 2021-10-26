import { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Spinner from "./components/Main";
import "./App.css";

const importData = async () => import("./data/trajectoires.json");

const Wrapper = styled.div`
  // width: 100vw;
  // height: 100vh;
  background: #282c34;
`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Setting the data state asynchronously
    // in case of huge dataset import
    // we'll be able to display a loader
    importData().then(
      ({ default: def, ...rest }) => {
        // const orderedByTime = Object.values(rest).sort((a, b) => { return a.key > b.key; });
        setData(Object.values(rest));
        // setData(orderedByTime);
      }
      // ({ default: def, ...rest }) => setData(Object.values(rest))
      // ({ default: def, ...rest }) => setTimeout(() => setData(rest), 1000)
    );
  }, []);

  return <Wrapper>{!data ? <Spinner /> : <Main data={data} />}</Wrapper>;
}

export default App;
