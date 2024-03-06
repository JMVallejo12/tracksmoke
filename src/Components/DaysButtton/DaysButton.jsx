import './DaysButtonStyle.css'

function DaysButton({children, handleClick, ...props}){

    return(
        <button className='btn-days' onClick={handleClick} {...props}>
            {children}
        </button>
    )

}

export default DaysButton