import { NavLink } from "react-router-dom";

const Donation = ({ donation }) => {
    const {id, Picture, Category, Title, Category_bg, Card_bg, Text_button_bg } = donation || {}

    // const style={

    // }
    return (
        <div>
            <NavLink to={`/donationDetails/${id}`}>
            <div className="card shadow-xl h-[320px]" style={{ background: `${Card_bg}`}}>
                <img src={Picture} alt="Shoes" />
                <div className="card-body">
                    <h2 className='text-sm font-medium '><span style={{color:`${Category_bg}`,background:`${Text_button_bg}`}} className="py-1 px-2 rounded"> {Category}</span></h2>
                    <h1 className="text-[18px] font-semibold " style={{color:`${Category_bg}`}}>{Title}</h1>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
            </NavLink>

        </div>
    );
};

export default Donation;