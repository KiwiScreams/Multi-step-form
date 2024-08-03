import "./Button.css"
function Button(props, className, onClick) {
    return (
        <>
            <button className={`btn ${props.className}`} onClick={onClick}>
                {props.text}
            </button>
        </>
    )
}
export default Button