import React from "react";
import Link from "next/link";

const RecordCard = (props) => {
    let date = props.date.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");
    return (
        <div className='bg-[white] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transform duration-200 ease-linear mt-5 ml-[13.5%] mr-[16.5%] px-[25px] py-5 rounded-[5px] hover:scale-[1.01] last:mb-[5%]'>
            <div className='flex'>
                <p className='mr-[10px] font-bold text-[teal] mt-[-5px]'>Diagnosis: </p>
                <p className='mt-[-5px]'>{props.diagnosis}</p>
            </div>
            <div className='flex'>
                <p className='mr-[10px] font-bold text-[teal] mt-[-5px]'>Description:</p>
                <p className='mt-[-5px]'>{props.description}</p>
            </div>
            <div className='flex'>
                <p className='mr-[10px] font-bold text-[teal] mt-[-5px]'>Date: </p>
                <p className='mt-[-5px]'>{date}</p>
            </div>
            <Link
                href={`/hospital/showdetails/${props.id}`}
                className='float-right text-[teal] transform duration-200 ease-linear no-underline hover:font-bold mt-[-5px]'
            >
                Read More...
            </Link>
        </div>
    );
};

export default RecordCard;
