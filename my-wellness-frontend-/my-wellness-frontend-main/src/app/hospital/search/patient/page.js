"use client";
import React from "react";
import PatientDetail from "@/components/common/PatientDetail";
import Header from "@/components/header/Header";
import RecordCard from "@/components/hospital/RecordCard";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";

const page = () => {
    const { user, records } = JSON.parse(localStorage.getItem("patient"));

    let date = user.dob.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");
    return (
        <>
            <Header>
                <NavButton href='/hospital/search' text='Search Patient' />
                <LogoutButton logoutFor='admin' />
            </Header>
            <div className='absolute w-full min-h-screen bg-[#f7f7f7] '>
                <div className='p-[20px] rounded-[5px] ml-[12%] mr-[15%]'>
                    <ul>
                        <PatientDetail
                            title='Name'
                            text={`${user.firstName} ${user.middleName} ${user.lastName}`}
                        />
                        <PatientDetail title='Id' text={user.patientId} />
                        <PatientDetail title='Contact No' text={user.contact} />
                        <PatientDetail title='Email' text={user.email} />
                        <PatientDetail title='Age' text={user.age} />
                        <PatientDetail title='Date of birth' text={date} />
                        <PatientDetail title='Address' text={user.address} />
                        <PatientDetail
                            title='Patient Status'
                            text={user.isAlive ? "Alive" : "Dead"}
                        />
                    </ul>
                </div>
                {records.map((record, index) => {
                    return (
                        <RecordCard
                            key={index}
                            diagnosis={record.diagnosis}
                            description={record.description}
                            date={record.createdAt}
                            id={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default page;
