import Link from "next/link";
import React from "react";
import { Logout } from "@mui/icons-material";

const LogoutButton = (props) => {
    return (
        <Link href='/' className='no-underline'>
            <button
                className='flex justify-center mb-[6em] items-center w-full py-[20px] px-[20px] text-[15.5px]  outline-none border-none text-white font-bold rounded-[10px] transition duration-100 ease-linear bg-[#42c6ae] hover:bg-[#38ad97]'
                onClick={() => localStorage.removeItem(`${props.logoutFor}Token`)}
            >
                Logout
                <Logout style={{ fontSize: 18, marginLeft: 10 }} />
            </button>
        </Link>
    );
};

export default LogoutButton;
