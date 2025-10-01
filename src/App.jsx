import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  const [pinned, setPinned] = useState(false);
  return (
    <>
      <Header pinned={pinned} />
      <Home pinned={pinned} setPinned={setPinned} />
    </>
  );
}
