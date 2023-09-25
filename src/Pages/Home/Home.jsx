import { useLoaderData } from 'react-router-dom';
import Donations from '../../Component/Home/Donations/Donations';
import './home.css'
const Home = () => {
    const donations=useLoaderData()
    return (
        <div>
            <section className='bannerSection w-full'>
                <div className="hero min-h-[400px] banner" >
                    <div className="hero-overlay banner-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="home-text">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className='mt-10'>
                            <input type="text" className="w-2/3 p-3 rounded-l border" placeholder="scarch here..." />
                            <button className="bg-[#FF444A] text-white py-3 px-5 text-[16px] font-semibold rounded-r ">Scarch</button>
                            {/* <button className='bg-[#FF444A] text-white p-3 rounded-r '>search</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-7xl mx-auto mt-20'>
                {/* <h1>{donations.length}</h1> */}
                <Donations donations={donations}></Donations>
            </section>
        </div>
    );
};

export default Home;