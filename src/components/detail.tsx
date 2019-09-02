import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

const Detail : React.SFC = () => {
    return (
        <div>
            <p>Detail</p>
            <Link to="/">to Home</Link>
        </div>
    )
}

console.log(Detail);

export default Detail