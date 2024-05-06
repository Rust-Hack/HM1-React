import { useState } from 'react';
import './CloseOrOpen.css'

const Text = () => {
    const [ opacity, setOpacity] = useState('');
    const [ btn, setBtn] = useState('close');
    const [ bg, setBg] = useState('red');

    const textVisible = () => {
        if(btn === 'close') {
            setBtn('open')
            setBg('green')
            return setOpacity('0');
        } else {
            setBtn('close')
            setBg('red')
            return setOpacity('1');
        }

    }

    return (
        <div className='textAndBtn'>
            <h1 className="text" style={{opacity: `${opacity}`}}>press the button and the text will disappear</h1>
            <button className='btnText' onClick={textVisible} style={{backgroundColor: `${bg}`}}>{btn}</button>
        </div>
    );
}

export default Text;