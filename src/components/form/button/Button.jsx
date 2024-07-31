import "./Button.css"
function Button(props) {
    return (
        <>
            <button onClick={props.onclick} className="btn">
                {props.text}
            </button>
        </>
    )
}
export default Button