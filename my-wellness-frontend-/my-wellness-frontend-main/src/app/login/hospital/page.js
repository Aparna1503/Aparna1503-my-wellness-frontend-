"use client";
import Header from "@/components/header/Header";
import LoginLayout from "@/components/layouts/LoginLayout";
import React from "react";
import image from "../../../../public/Doctors-rafiki.svg";
import Link from "next/link";
import NavButton from "@/components/header/NavButton";

const page = () => {
    return (
        <>
            <Header>
                <div className='flex flex-col gap-4'>
                    <NavButton href='/login/admin' text='Login as admin' />
                    <NavButton active href='/login/hospital' text='Login as hospital' />
                    <NavButton href='/login/chemist' text='Login as chemist' />
                </div>
            </Header>
            <LoginLayout placeholder='User Id' imageSource={image} loginFor='hospital' />
        </>
    );
};

export default page;
