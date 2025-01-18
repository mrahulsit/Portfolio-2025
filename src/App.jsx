import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/HOME/Home";
import "./index.css";

export default function App() {
  const Loading = () => {
    return (
      <div className="loading">
        <Home />
      </div>
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    </div>
  );
}
