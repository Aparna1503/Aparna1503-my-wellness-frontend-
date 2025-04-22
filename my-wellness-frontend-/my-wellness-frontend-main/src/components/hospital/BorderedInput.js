import React from "react";

const BorderedInput = (props) => {
    return (
        <>
            <input
                id={props.id}
                placeholder={props.placeholder}
                className='text-[17px] mb-[10px] mx-[15px] h-[40px] px-[15px] border-[2px] border-black rounded-[5px] '
                value={props.value}
                onChange={(e) => props.setFunction(e.target.value)}
            />
        </>
    );
};

export default BorderedInput;
