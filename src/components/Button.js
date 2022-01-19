const Button = (btnObj) => {
    const {children, className, click } = btnObj;
    return (
        <button 
            className={className}
            onClick={click}
        >
            {children}
        </button>
    )
}
export default Button;