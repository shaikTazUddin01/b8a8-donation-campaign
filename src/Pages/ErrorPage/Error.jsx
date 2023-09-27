// import React from 'react';

import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <h1 className='text-4xl font-bold mt-5'>Oops..!!</h1> <br />
            <h1 className='text-7xl font-bold'>404</h1> <br />
            <h2 className='text-4xl font-bold'>page not Found</h2>
            <Link to={'/'}><button className="btn btn-primary my-5">Go Home</button></Link>
        </div>
    );
};

export default Error;