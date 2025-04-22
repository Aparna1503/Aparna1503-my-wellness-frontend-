"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";

const PatientRecordPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    let { user, records } = JSON.parse(localStorage.getItem("patient"));
    const { id } = useParams();
    records = records[id];

    let date = records.createdAt.split("T");
    date = date[0].split("-");
    date = date.reverse();
    date = date.join("-");

    console.log(records);

    return (
        <>
            <Header></Header>

            <div className='absolute w-full min-h-screen bg-[#f7f7f7]'>
                <p className='font-bold ml-[15%] mb-[10px] mt-[3%] transition duration-200 ease-linear'>
                    Record Details
                </p>
                <div className='mx-[15%] bg-white py-[20px] px-[30px] rounded-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition duration-200 ease-linear hover:scale-[1.01] last:mb-[5%]'>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Diagnosis:{" "}
                        </p>
                        <p>{records.diagnosis}</p>
                    </div>

                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Description:
                        </p>
                        <p>{records.description}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Date:{" "}
                        </p>
                        <p>{date}</p>
                    </div>
                </div>

                <p className='font-bold ml-[15%] mb-[10px] mt-[3%] transition duration-200 ease-linear'>
                    Prescription
                </p>
                <div className='mx-[15%] bg-white py-[20px] px-[30px] rounded-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition duration-200 ease-linear hover:scale-[1.01] last:mb-[5%]'>
                    {records?.prescription?.medicines?.map((medicine) => {
                        return (
                            <div style={{ display: "flex" }}>
                                <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                                    {medicine.name}:{" "}
                                </p>
                                <p>{medicine.description}</p>
                            </div>
                        );
                    })}
                </div>

                <p className='font-bold ml-[15%] mb-[10px] mt-[3%] transition duration-200 ease-linear'>
                    Doctor Details
                </p>
                <div className='mx-[15%] bg-white py-[20px] px-[30px] rounded-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition duration-200 ease-linear hover:scale-[1.01] last:mb-[5%]'>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Name:{" "}
                        </p>
                        <p>{`${records.doctor.firstName} ${records.doctor.middleName} ${records.doctor.lastName}`}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Id:{" "}
                        </p>
                        <p>{records.doctor.doctorId}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Qualification:
                        </p>
                        <p>{records.doctor.qualification}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Contact No:
                        </p>
                        <p>{records.doctor.contact}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Email:{" "}
                        </p>
                        <p>{records.doctor.email}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Age:{" "}
                        </p>
                        <p>{records.doctor.age}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Gender:{" "}
                        </p>
                        <p>{records.doctor.gender}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Address:{" "}
                        </p>
                        <p>{records.doctor.address}</p>
                    </div>
                </div>

                <p className='font-bold ml-[15%] mb-[10px] mt-[3%] transition duration-200 ease-linear'>
                    Hospital Details
                </p>

                <div className='mx-[15%] bg-white py-[20px] px-[30px] rounded-[5px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition duration-200 ease-linear hover:scale-[1.01] last:mb-[5%]'>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Name:{" "}
                        </p>
                        <p>{records.hospital.name}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Email:
                        </p>
                        <p>{records.hospital.email}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Contact:
                        </p>
                        <p>{records.hospital.contact}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Type:{" "}
                        </p>
                        <p>{records.hospital.type}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: 10 }} className='font-bold text-[teal]'>
                            Address:{" "}
                        </p>
                        <p>{records.hospital.address}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientRecordPage;
