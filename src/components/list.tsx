import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

const List : React.FC = (propsType) => {
    const [ state, setState ] = React.useState();
    console.log(state);
    
    return (
        <div>
            <p>List</p>
            <Link to="/detail">to Detail</Link>
        </div>
    )

}

console.log(List);

export default List