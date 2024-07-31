import Button from "../button/Button"

function PersonalInfo() {
    return (
        <>
            <section className="personal-info-section">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <form>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" id="username" placeholder="e.g. Stephen King"/>
                    <label htmlFor="username">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"/>
                    <label htmlFor="username">Phone Number</label>
                    <input type="number" name="phone" id="phone" placeholder="e.g. +1 234 567 890"/>
                </form>
            </section>
        </>
    )
}
export default PersonalInfo