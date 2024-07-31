import { Outlet } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"
import "./Home.css"
import Button from "../components/form/button/Button"
function Home({ /*currentComponent: CurrentComponent, handleButtonClick*/}) {
    
    function sayHi() {
        console.log("hi");
    }
    return (
        <>
            <section className="core-section">
                <Navigation />
                <div className="container">
                    <div className="form">
                        <Outlet />
                        {/* <CurrentComponent /> */}
                    </div>
                    <Button text="Next Step" /*onClick={handleButtonClick}*/></Button>
                </div>
            </section>
        </>
    )
}
export default Home