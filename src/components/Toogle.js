import { useState } from 'react';
import '../css/toogle.css'

const Toogle = ({ value, event, disabled }) => {
    const [on, setOn] = useState(value);

    function onClickToogle() {
        if (!disabled) {
            setOn(res => !res);
            if (typeof event === 'function')
                event();
        }
    }
    return (
        <span className={'toogle__wrap ' + (on ? 'toogle__on' : '')} onClick={onClickToogle}>
            <span className='toogle__ball'></span>
        </span>
    )
}

export default Toogle;