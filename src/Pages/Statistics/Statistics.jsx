// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const Statistics = () => {

    const Donation = useLoaderData()

    const DonationLength = Donation?.length

    const getMyDonation = () => {
        const getmydonation = localStorage.getItem('donation');
        const getmydonationParse = JSON.parse(getmydonation);
        return getmydonationParse?.length;
    };

    const donation = DonationLength > 0 ? ((getMyDonation() * 100) / DonationLength).toFixed(2) : 0;

    const TotalDonation = 100 - donation;
    const mydonation = 100 - TotalDonation;


    const data = [
        { name: 'Total Donation', value: TotalDonation?TotalDonation:100 },
        { name: 'Your Donation', value: mydonation?mydonation:0 },
    ];

    const COLORS = ['#FF444A','#00C49F'];



    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className='flex justify-center'>
                <PieChart width={350} height={350}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-5 p-5'>
                <div className='flex gap-2 items-center'>
                    <p className='text-lg font-medium'>Your Donation</p>
                    <span className='bg-[#00C49F] h-2 w-20 rounded-sm'></span>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-lg font-medium'>Total Donation</p>
                    <span className='bg-[#FF444A] h-2 w-20 rounded-sm'></span>
                </div>
            </div>
        </div>

    )

}


export default Statistics;