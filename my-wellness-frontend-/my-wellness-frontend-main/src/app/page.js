"use client";
import React, { useMemo, useState } from "react";
import Header from "@/components/header/Header";
import backgroundImage from "../../public/background.jpg";
import mainImage from "../../public/main.svg";
import Image from "next/image";
import { Coiny } from "next/font/google";
import Link from "next/link";
import NavButton from "@/components/header/NavButton";
const coiny = Coiny({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <>
            <Image
                className='h-screen absolute max-w-[77%] rounded-tr-[100%] opacity-50 z-[-1]'
                src={backgroundImage}
                alt='background image'
            />
            <Header>
                <div>
                    <NavButton href='/login/admin' text='Login as admin' />
                    <NavButton href='/login/hospital' text='Login as hospital' />
                    <NavButton href='/login/chemist' text='Login as chemist' />
                </div>
            </Header>
            <div>
                <div className='grid grid-cols-2'>
                    <div className='text-black mt-[30%] text-[2.9em] ml-[15%]'>
                        <p className={coiny.className}>Because Health</p>
                        <p className={coiny.className}>Matters.</p>
                    </div>
                    <div>
                        <Image className='m-[5px] mt-[8%]' src={mainImage} alt='exercise img' />
                    </div>
                </div>
            </div>
        </>
    );
}
