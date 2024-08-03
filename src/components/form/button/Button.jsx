import "./Button.css"
function Button(props, className, onClick, disabled) {
    return (
        <>
            <button className={`btn ${props.className}`} disabled={disabled} onClick={onClick}>
                {props.text}
            </button>
        </>
    )
}
export default Button