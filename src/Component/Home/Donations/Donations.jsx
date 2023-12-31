import Donation from '../Donation/Donation';
// import { NavLink } from 'react-router-dom';

const Donations = ({donations}) => {
    return (
        <div>
           
            <div className='grid grid-cols-1 p-5 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {donations?.map(donation=><Donation key={donation.id} donation={donation}></Donation>)}
            </div>
       
        </div>
    );
};

export default Donations;