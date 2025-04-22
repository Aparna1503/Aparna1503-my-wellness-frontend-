import Link from "next/link";
import React from "react";

const NavButton = (props) => {
    return (
        <Link href={props.href} className='no-underline'>
            <button
                className={`1flex justify-center items-center w-full py-[20px] px-[20px] text-[15.5px]  outline-none border-none text-white font-bold rounded-[10px] transition duration-100 ease-linear ${
                    props.active && "bg-[#3bb7a0]"
                } hover:bg-[#3bb7a0]`}
            >
                {props.text}
            </button>
        </Link>
    );
};

export default NavButton;
