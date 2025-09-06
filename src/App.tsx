//import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
//import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  );
}

export default App;
