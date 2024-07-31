import { NavLink } from "react-router-dom"
import "./Navigation.css"
function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <NavLink
                            to="personal-info"
                            className={({ isActive }) => `nav-li flex ${isActive ? "active" : ""}`}
                        >
                            <div className="num">1</div>
                            <div className="nav-text">
                                <span>STEP 1</span>
                                <h6>YOUR INFO</h6>
                            </div>
                        </NavLink>
                        <NavLink to="select-plan"
                            className={({ isActive }) => `nav-li flex ${isActive ? "active" : ""}`}
                        >
                            <div className="num">2</div>
                            <div className="nav-text">
                                <span>STEP 2</span>
                                <h6>SELECT PLAN</h6>
                            </div>
                        </NavLink>
                        <NavLink
                            to="add-ons"
                            className={({ isActive }) => `nav-li flex ${isActive ? "active" : ""}`}
                        >
                            <div className="num">3</div>
                            <div className="nav-text">
                                <span>STEP 3</span>
                                <h6>ADD-ONS</h6>
                            </div>
                        </NavLink>
                        <NavLink
                            to="summary"
                            className={({ isActive }) => `nav-li flex ${isActive ? "active" : ""}`}
                        >
                            <div className="num">4</div>
                            <div className="nav-text">
                                <span>STEP 4</span>
                                <h6>SUMMARY</h6>
                            </div>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navigation