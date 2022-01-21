const Input = (inputObj) => {
    const {children, className, placeholder, change, maxlength, readonly, hidden, type, keyup, blur } = inputObj;

    const autoSkip = (e) => {
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

    const inputKeyUp = (parentEvent, inputType, e) => {
        if(e.code == "Tab" || e.code =="ShiftLeft") {
            return;
        }

        autoSkip(e);

        if(typeof(parentEvent) != "undefined")
        parentEvent(e);
    }

    const inputBlur = (parentEvent, inputType, e) => {
        const parentValue = e.target.value;
        const parentType = inputType;
        if(parentType === "email" && (parentValue.indexOf("@") === -1 || parentValue.indexOf(".") === -1)){
            return alert("이메일 형식이 아닙니다!");
        }

        if(typeof(parentEvent) != "undefined")
        parentEvent(e);
    }

    return (
        <input 
            className={className}
            onChange={change}
            onBlur={(e)=>inputBlur(blur,type,e)}
            placeholder={placeholder}
            maxLength={maxlength}
            readOnly={readonly}
            hidden={hidden}
            onKeyUp={(e)=>inputKeyUp(keyup,type,e)}
            type={type}
        >
            {children}
        </input>
    )
}

export default Input;