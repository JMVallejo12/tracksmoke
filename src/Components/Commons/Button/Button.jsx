import './ButtonStyle.css'

function Button({children, handleClick, ...props}){

    return(
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    )
}

export default Button