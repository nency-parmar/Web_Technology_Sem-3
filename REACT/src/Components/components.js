import React, { Component } from "react";

// CLASS 
// class Students extends Component
// {
//     render(){
//         return(
//             <>
//                 <h1>Hello</h1>
//             </>
//         );
//     };
// }


// EVENT HANDLER
// function Students()
// {
//     const handleAlert = () => {
//         alert("Nothing")
//     }
//     return(
//         <button onClick={handleAlert}>Click Me!</button>
//     );
// }

//Operator
function Students({toDisplay})
{
    return(
        <>
            {toDisplay ? "DISPLAY" : "HIDDEN"}
        </>
    )
}

export default Students;