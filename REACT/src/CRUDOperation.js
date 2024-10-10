import { useState } from "react";

const Crud = (() => {

    const [arr , setArr] = useState(["abc","xyz","qwe","uhk"]);

    const [name , setName] = useState("");

    const addArray = () => {
        if(name != "")
        {
            setArr([...arr,name]);
            setName("");
        }
    }

    const deleteArr = (index) => {
        let newArr = [...arr];
        newArr.splice(index,1);
        setArr(newArr);
    }

    const editArr = (index) => {
        let edit = prompt("Enter You Want to Edit : ");
        console.log(edit);
        let newArr = [...arr];
        newArr[index] = edit;
        setArr(newArr);
    }

    return(
        <>
            <div className="p-3">
                <input type="text" className="border border-dark" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
                <button className="bg-success text-light p-1 m-2" onClick={addArray}>ADD</button>
                <ul>
                    {
                        arr.map((item , index) => {
                            return(
                                <li>
                                    {item}
                                    <button className="bg-danger p-2 text-light m-2" onClick={() => {deleteArr(index)}}>DELETE</button>
                                    <button className="bg-primary p-2 text-light" onClick={()=>{editArr(index)}}>EDIT</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
});

export default Crud;