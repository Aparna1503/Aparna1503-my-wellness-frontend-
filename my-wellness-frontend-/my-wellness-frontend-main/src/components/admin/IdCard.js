import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Barcode from "react-barcode";

const IdCard = ({ componentRef, ...props }) => {
    return (
        <div
            ref={componentRef}
            className='flex flex-row gap-[10px] w-[500px] min-h-[250px] rounded-[10px] overflow-hidden shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]'
        >
            <div className='flex flex-col justify-center bg-[#c1ede7]'>
                <PersonIcon
                    style={{
                        height: "150px",
                        width: "150px",
                        padding: "10px",
                        color: "#1fbea9",
                    }}
                />
            </div>
            <div className='flex-1 items-center p-[20px]'>
                <h1 className='mt-[30px] mb-[20px] self-center font-bold text-[20px] text-[#1fbea9]'>
                    {props.id}
                </h1>
                <div>
                    <div className='flex flex-row gap-[10px] mb-[10px]'>
                        <p className='text-[#1fbea9]'>Name:</p>
                        <p>{props.name}</p>
                    </div>
                    <div className='flex flex-row gap-[10px] mb-[10px]'>
                        <p className='text-[#1fbea9]'>Contact:</p>
                        <p>{props.contact}</p>
                    </div>
                    <div className='flex flex-row gap-[10px] mb-[10px]'>
                        <p className='text-[#1fbea9]'>Address:</p>
                        <p className='flex'>
                            {props.city} {props.state}
                        </p>
                    </div>
                </div>
                <div className='mt-[40px]'>
                    <Barcode value={props.id} displayValue={false} height={25} />
                </div>
            </div>
        </div>
    );
};

export default IdCard;
