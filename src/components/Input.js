const Input = (inputObj) => {
    const {children, className, placeholder, change, maxlength, readonly, hidden } = inputObj;

    const testKeyUp = (e) => {
        if(typeof(maxlength) != undefined){
            var target = e.target;
            var maxLength = maxlength;
            var myLength = target.value.length;
            if (myLength >= maxLength) {
                var next = target;
                while (next = next.nextElementSibling) {
                    if (next == null)
                        break;
                    if (next.tagName.toLowerCase() === "input") {
                        next.focus();
                        break;
                    }
                }
            }
        }
    }

    return (
        <input 
            className={className}
            onChange={change}
            placeholder={placeholder}
            maxLength={maxlength}
            readOnly={readonly}
            hidden={hidden}
            onKeyUp={testKeyUp}
        >
            {children}
        </input>
    )
}

export default Input;