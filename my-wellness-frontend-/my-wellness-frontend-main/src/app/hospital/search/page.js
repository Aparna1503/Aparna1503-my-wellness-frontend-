"use client";
import SearchPatient from "@/components/common/SearchPatient";
import NavButton from "@/components/header/NavButton";
import Header from "@/components/header/Header";
import LogoutButton from "@/components/header/LogoutButton";
import React from "react";

const page = () => {
    return (
        <>
            <Header>
                <div className='flex flex-col gap-4'>
                    <NavButton active href='/hospital/search' text='Search Patient' />
                    <NavButton href='/hospital/add' text='Add Record' />
                </div>
                <LogoutButton logoutFor='hospital' />
            </Header>
            <SearchPatient searchAs='hospital' />
        </>
    );
};

export default page;
