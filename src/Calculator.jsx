import { useState } from "react";

function Calculator() {
    const [value, setValue] = useState('');

    const handleInput = (val) => {
        setValue(value + val);
    };

    const handleCalculation = () => {
        try {
            setValue(eval(value));
        } catch (e) {
            setValue("Error");
        }
    };

    const handleAC = () => {
        setValue("");
    };

    const handleDELL = () => {
        setValue(value.slice(0, -1));
    };

    return (
        <>
        
        <div className="calculator">
        <h1 className="heading">Casio</h1>
            <input type="text" value={value} readOnly placeholder="0" id="display"/>
            <div className="keys">
                <button onClick={handleAC} className="operator">AC</button>
                <button onClick={handleDELL} className="operator">DELL</button>
                <button onClick={() => handleInput('%')} className="operator">%</button>
                <button onClick={() => handleInput('/')} className="operator">/</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button className="operator" onClick={() => handleInput('*')}>*</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button className="operator" onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button className="operator" onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('00')}>00</button>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={() => handleInput('.')}>.</button>
                <button className="operators" onClick={handleCalculation}>=</button>
            </div>
        </div>
        </>
    );
}

export default Calculator;
