import React from "react";
import { Button } from "@chakra-ui/react";

const SubmitButton = ({ text, ...props }) => {
    return (
        <Button
            className='h-[50px] bg-[#2935e0] hover:bg-black rounded-[5px] text-white font-bold text-[15px] outline-none border-none  mt-[30px] transition duration-270 ease-linear'
            type='submit'
            {...props}
        >
            {text}
        </Button>
    );
};

export default SubmitButton;
