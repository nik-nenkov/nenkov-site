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
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/diagrams">Diagrams</a></li>
                    <li><a href="/books">Books</a></li>
                </ul>
            </nav>
        </div>
    );
}