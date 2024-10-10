import React , {useEffect , useState} from "react";

const UseEffect = () =>{
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
        });
    }, []);

    return(
        <>
            <h1>DATA</h1>
            <table className="border border-dark">
                {data.map((item)=>{
                    return(
                    <div>
                        <tr>
                            <th className="border border-primary m-s-2">ID</th>
                            <th className="border border-primary m-s-2">User Name</th>
                            <th className="border border-primary m-s-2">User ID</th>
                            <th className="border border-primary m-s-2">User Body</th>
                        </tr>
                        <tr>
                            <td className="border border-dark m-s-2">{item.id}</td>
                            <td className="border border-dark m-s-2">{item.title}</td>
                            <td className="border border-dark m-s-2">{item.userId}</td>
                            <td className="border border-dark m-s-2">{item.body}</td>
                        </tr>
                    </div>)
                })}
            </table>
        </>
    );
}

export default UseEffect;