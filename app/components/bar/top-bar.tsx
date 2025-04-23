import { useNavigate } from "react-router-dom";
import "./top-bar.scss";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <button className="back-button" onClick={() => navigate("/")}>
        <span className="arrow"></span>
      </button>
      <h1 className="title">Nikolay Nenkov CV / Presentation Website</h1>
    </div>
  );
}