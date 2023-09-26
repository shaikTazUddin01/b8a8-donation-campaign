import React, { useEffect, useState } from 'react';
import ShowDonation from './ShowDonation';


const Donation = () => {
    const [getDonation, setGetDonaton] = useState([]);
    const [showMore, setShowMore] = useState(false)


    useEffect(() => {
        const getDonationByStroage = localStorage.getItem("donation")
        setGetDonaton(JSON.parse(getDonationByStroage));
    }, [])

    const handleShow = () => {
        setShowMore(true)
    }
    return (
        <div className='mt-20'>
            {getDonation ?
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto p-5 '>
                    {
                        (!showMore) ?
                            getDonation?.slice(0, 4)?.map(donation => <ShowDonation key={donation.id} donation={donation}></ShowDonation>)
                            : getDonation?.map(donation => <ShowDonation key={donation.id} donation={donation}></ShowDonation>)

                    }
                </div>
                : <div className='flex justify-center'>
                    <h1 className='text-4xl font-semibold'>No Donation Added</h1>
                </div>
            }
            <div className='flex justify-center my-10'>
                {

                    getDonation?.length >= 4 && !showMore &&
                    <button className='btn btn-success bg-green-600 text-white' onClick={handleShow}>Show All</button>
                }
            </div>
        </div>
    );
};

export default Donation;