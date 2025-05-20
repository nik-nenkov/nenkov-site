import { Link } from "react-router-dom";
import "./expandable-menu.scss";

export default function ExpandableMenu() {
    return (
        <div className="expandable-menu">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button">
                <span className="arrow"></span>
            </label>
            <nav className="menu">
                <ul>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/diagrams">Diagrams</Link></li>
                    <li><Link to="/books">Books</Link></li>
                </ul>
            </nav>
        </div>
    );
}