"use client";
import React from "react";
import PatientDetail from "@/components/common/PatientDetail";
import Header from "@/components/header/Header";
import RecordCard from "@/components/hospital/RecordCard";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";

const PatientDetailsPage = () => {
    const { user, records } = JSON.parse(localStorage.getItem("patient"));
    return (
        <>
            <Header>
                <NavButton href='/chemist/search' text='Search Patient' />
                <LogoutButton logoutFor='chemist' />
            </Header>
            <div className='absolute w-full h-screen bg-[#f7f7f7]'>
                <div className='p-[20px] rounded-[5px] ml-[12%] mr-[15%]'>
                    <ul>
                        <PatientDetail
                            title='Name'
                            text={`${user.firstName} ${user.middleName} ${user.lastName}`}
                        />
                    </ul>
                </div>

                {records?.map((record) => {
                    let date = record.createdAt.split("T");
                    date = date[0].split("-");
                    date = date.reverse();
                    date = date.join("-");

                    return (
                        <>
                            <p className='font-bold ml-[15%] mb-[10px] mt-[3%] transition duration-200 ease-linear'>
                                Prescription - {date}
                            </p>

                            <div className='mx-[15%] bg-white py-[20px] px-[30px] rounded-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition duration-200 ease-linear hover:scale-[1.01] last:mb-[5%]'>
                                {record.prescription?.medicines?.map((medicine) => {
                                    return (
                                        <div style={{ display: "flex" }}>
                                            <p
                                                style={{ marginRight: 10 }}
                                                className='font-bold text-[teal]'
                                            >
                                                {medicine.name}:{" "}
                                            </p>
                                            <p>{medicine.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default PatientDetailsPage;
