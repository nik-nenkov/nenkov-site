import { Link } from "react-router-dom";
import "./top-bar.scss";

interface TopBarProps {
  title?: string;
}

export default function TopBar({ title = "Welcome to My Portfolio" }: TopBarProps) {
  return (
    <div className="top-bar">
      <Link className="back-button" to="/">
        <span className="arrow"></span>
      </Link>
      <div className="titles">
        <h3 className="title">Nikolay Nenkov CV / Presentation Website</h3>
        <h1>{title}</h1>
      </div>
    </div>
  );
}