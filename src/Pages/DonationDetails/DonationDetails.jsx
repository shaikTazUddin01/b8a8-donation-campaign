import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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


    const handleDonation = () => {
        const getDonation= localStorage.getItem("donation")
        const getDonationParse=JSON.parse(getDonation)
        if (!getDonation) {
            localStorage.setItem("donation",JSON.stringify([donationDetail]));
            toast.success("Donation success");

        }else{
            console.log(donationDetail.id)
            console.log(getDonationParse)
            const exist=getDonationParse.find(donation=>donation.id===idInt)
            console.log(exist)
            if(!exist){
                localStorage.setItem("donation",JSON.stringify([...getDonationParse,donationDetail]));
                toast.success("Donation success");
            }else{
                toast.error("Already you added  this donation");

            }

          }

        console.log()
        
    }
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className=' max-w-4xl mx-auto relative donation'>
                <img src={donationDetail.Picture} alt="" className='w-full h-auto mx-auto z-0' />
                <div className='bg-[#1d1d1c94] -mt-[88px] p-5 donation-button relative'>
                    <button className='btn text-white opacity-200 border-none' style={{ background: `${donationDetail.Category_bg}`}}
                        onClick={handleDonation}>Donate ${donationDetail.Price}</button>
                    <ToastContainer></ToastContainer>
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