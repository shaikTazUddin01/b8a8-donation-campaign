import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import './donationDetails.css'
const DonationDetails = () => {
    const donations = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const [donationDetail, setDonationDetail] = useState([])

    useEffect(() => {
        const donation = donations.find(item => item.id == idInt)
        setDonationDetail(donation)
    }, [donations, id])


    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className=' max-w-4xl mx-auto relative donation'>
                <img src={donationDetail.Picture} alt="" className='w-full h-auto mx-auto z-0' />
                <div className='bg-[#1d1d1c94] -mt-[88px] p-5 donation-button relative'>
                    <button className='btn btn-error text-white opacity-200'>Donate ${donationDetail.Price}</button>
                </div>
            </div>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl font-bold mt-5'>{donationDetail.Title}</h1>
                <p className='text-[16px] font-normal mt-2'>{donationDetail.Description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;