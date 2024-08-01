import "./Button.css"
function Button(props, className) {
    return (
        <>
            <button className={`btn ${props.className}`}>
                {props.text}
            </button>
        </>
    )
}
export default Button