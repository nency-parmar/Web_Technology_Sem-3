import {useState} from "react";

const Calculator = () => {

    // Logic Of Calculator
    const [input , setInput] = useState("");

    const appendNumber = (value) => {
        setInput((prevValue) => prevValue + value);
    };

    const clearDisplay = () => {
        setInput(" ");
    }

    const deleteNum = () => {
        setInput((prevInput) => prevInput.slice(0,-1));
    }

    const displayAnswer = () => {
        try
        {
            setInput(eval(input).toString());
        }
        catch(error)
        {
            setInput("Syntax Error");
        }
    }

    // UI Of Calculator
    return(
        <>
            <div>
                <input type='text' placeholder="0" className="text-end" value={input}/>
            </div><br />
            <div className="row">
                <div className="col-1"><button className="bg-info text-center" onClick={() => deleteNum('C')}>C</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => clearDisplay('AC')}>AC</button ></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => appendNumber('%')}>%</button></div>
                <div className="col-1"><button className="bg-info text-center bs-warning-border-subtle" onClick={() => appendNumber('/')}>/</button></div>
		    </div>
            <div className="row">
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('7')}>7</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('8')}>8</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('9')}>9</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => appendNumber('*')}>*</button></div>
            </div>
            <div className="row">
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('4')}>4</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('5')}>5</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('6')}>6</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => appendNumber('-')}>-</button></div>
            </div>
            <div className="row">
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('1')}>1</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('2')}>2</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('3')}>3</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => appendNumber('+')}>+</button></div>
            </div>
            <div className="row">
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('0')}>0</button></div>
                <div className="col-1"><button className="text-center" onClick={() => appendNumber('00')}>00</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => appendNumber('.')}>.</button></div>
                <div className="col-1"><button className="bg-info text-center" onClick={() => displayAnswer()}>=</button></div>
            </div>
        </>
    );
}

export default Calculator;