import React from 'react';
import { Link } from 'react-router-dom';

const ShowDonation = ({ donation }) => {
    const { id,Picture, Category, Title, Category_bg, Card_bg, Text_button_bg, Price } = donation || {}
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md" style={{ background: `${Card_bg}` }}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
                    <img
                        src={Picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 ">
                    <h2 className='text-sm font-medium mb-3'><span style={{ color: `${Category_bg}`, background: `${Text_button_bg}` }} className="py-1 px-2 rounded"> {Category}</span></h2>

                    <h1 className="text-xl font-semibold text-black mb-2">{Title}</h1>
                    <h1 className="text-lg font-semibold mb-4" style={{ color: `${Category_bg}`}}>${Price}</h1>
                    <Link to={`/donationDetails/${id}`}>
                        <button className='text-white btn' style={{ background: `${Category_bg}` }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowDonation;