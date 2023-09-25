import React from 'react';
import Donation from '../Donation/Donation';
import { NavLink } from 'react-router-dom';

const Donations = ({donations}) => {
    // const newLocal = '/donationdetails';
    return (
        <div>
           
            <div className='grid grid-cols-4 gap-5'>
            {donations?.map(donation=><Donation key={donation.id} donation={donation}></Donation>)}
            </div>
       
        </div>
    );
};

export default Donations;