import { Outlet } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"

function Home() {
    return (
        <>
            <section className="core-section">
                <Navigation />
                <div className="form">
                    <Outlet />
                </div>
            </section>
        </>
    )
}
export default Home