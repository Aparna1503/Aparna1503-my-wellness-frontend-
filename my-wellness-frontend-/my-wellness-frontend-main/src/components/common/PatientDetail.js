import React from "react";

const PatientDetail = (props) => {
    return (
        <li className='list-none flex border-[2px] border-[#04c9c9] py-[5px] px-[10px] bg-[white] mt-[10px] rounded-[10px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:scale-[1.0125]'>
            <p className='mr-[10px] font-medium text-[teal]'>{props.title}:</p>
            <p className='flex-1'>{props.text}</p>
        </li>
    );
};

export default PatientDetail;
