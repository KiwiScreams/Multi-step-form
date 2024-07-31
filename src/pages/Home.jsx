import { Outlet } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"
import "./Home.css"
import Button from "../components/form/button/Button"
function Home() {
    return (
        <>
            <section className="core-section">
                <Navigation />
                <div className="container">
                    <div className="form">
                        <Outlet />
                    </div>
                    <Button />
                </div>
            </section>
        </>
    )
}
export default Home