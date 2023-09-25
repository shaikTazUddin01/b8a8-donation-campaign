import React, { useEffect, useState } from 'react';
import ShowDonation from './ShowDonation';

const Donation = () => {
    const [getDonation,setGetDonaton]=useState([]);
    const[showbutton,setShowButton]=useState(false)


    useEffect(()=>{
        const getDonationByStroage=localStorage.getItem("donation")
        setGetDonaton(JSON.parse(getDonationByStroage));
    },[])
    
    const handleShow=()=>{}
    return (
       <div>
         <div className='grid grid-cols-2 gap-5 max-w-7xl mx-auto'>
            {
                getDonation.map(donation=><ShowDonation key={donation.id} donation={donation}></ShowDonation>)
            }
        </div>
        <div className='flex justify-center mt-10'>
            <button className='btn btn-primary' onClick={handleShow}>Show All</button>
        </div>
       </div>
    );
};

export default Donation;