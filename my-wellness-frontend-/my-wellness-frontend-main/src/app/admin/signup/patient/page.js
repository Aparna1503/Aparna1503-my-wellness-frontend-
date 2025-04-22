"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import LabelledSelect from "@/components/signup/LabelledSelect";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import Link from "next/link";
import LogoutButton from "@/components/header/LogoutButton";
import NavButton from "@/components/header/NavButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";
import LoaderModal from "@/components/common/LoaderModal";
import { useFormik } from "formik";
import { patientSchema } from "@/validations/patientValidation";

const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    contactNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    isAlive: true,
    email: "",
    password: "",
    dob: "",
    age: 1,
    gender: "Male",
};

const page = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: patientSchema,
        onSubmit: (values, action) => {
            setIsLoading(true);

            const data = {
                firstName: values.firstName.trim(),
                middleName: values.middleName.trim(),
                lastName: values.lastName.trim(),
                contact: values.contactNo.trim(),
                address: values.address.trim(),
                city: values.city.trim(),
                state: values.state.trim(),
                country: values.country.trim(),
                pincode: values.pincode.trim(),
                isAlive: values.isAlive,
                email: values.email.trim(),
                password: values.password.trim(),
                dob: values.date,
                age: values.age,
                gender: values.gender,
            };

            const options = {
                method: "POST",
                url: "https://mywellness-paras248.koyeb.app/api/auth/signup/patient",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
                data,
            };

            axios
                .request(options)
                .then((response) => {
                    setIsLoading(false);
                    setResponse(response.data.user);
                    onOpen();
                })
                .catch((err) => {
                    setIsLoading(false);
                    toast({
                        title: err.response.data,
                        status: "error",
                        isClosable: false,
                        position: "bottom-right",
                        duration: 2000,
                    });
                });
        },
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.patientId}
                    name={`${response.firstName} ${response.middleName} ${response.lastName}`}
                    contact={response.contact}
                    state={response.state}
                    city={response.city}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            )}
            <Header>
                <div className='flex flex-col gap-4'>
                    <NavButton active href='/admin/signup/patient' text='Register Patient' />
                    <NavButton href='/admin/signup/doctor' text='Register Doctor' />
                    <NavButton href='/admin/signup/hospital' text='Register Hospital' />
                    <NavButton href='/admin/signup/chemist' text='Register Chemist' />
                </div>
                <div>
                    <LogoutButton logoutFor='admin' />
                </div>
            </Header>
            <SignupLayout heading='Register Patient'>
                <form onSubmit={handleSubmit}>
                    {isLoading && <LoaderModal />}
                    <div className='flex flex-row gap-2 items-center'>
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='First Name'
                            id='FirstName'
                            value={values.firstName}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='firstName'
                            error={errors.firstName}
                            touched={touched.firstName}
                            placeholder='First Name'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Middle Name'
                            id='MiddleName'
                            value={values.middleName}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='middleName'
                            error={errors.middleName}
                            touched={touched.middleName}
                            placeholder='Middle Name'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Last Name'
                            id='LastName'
                            value={values.lastName}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='lastName'
                            error={errors.lastName}
                            touched={touched.lastName}
                            placeholder='Last Name'
                        />
                    </div>
                    <LabelledInput
                        style={{ flex: 1 }}
                        label='Contact No'
                        id='ContactNo'
                        value={values.contactNo}
                        setFunction={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        name='contactNo'
                        error={errors.contactNo}
                        touched={touched.contactNo}
                        placeholder='Contact No'
                    />

                    <div className='flex flex-row gap-2 items-center'>
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Date Of Birth'
                            id='date'
                            value={values.date}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='date'
                            name='date'
                            error={errors.date}
                            touched={touched.date}
                            placeholder='Date Of Birth'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Age'
                            id='age'
                            value={values.age}
                            setFunction={handleChange}
                            type='number'
                            name='age'
                            error={errors.age}
                            touched={touched.age}
                            placeholder='Age'
                        />
                        <LabelledSelect
                            style={{ flex: 1 }}
                            label='Gender'
                            id='gender'
                            name='gender'
                            value={values.gender}
                            setFunction={handleChange}
                        />
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Address'
                            id='address'
                            value={values.address}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='address'
                            error={errors.address}
                            touched={touched.address}
                            placeholder='Address'
                        />
                        <LabelledInput
                            label='City'
                            id='city'
                            value={values.city}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='city'
                            error={errors.city}
                            touched={touched.city}
                            placeholder='City'
                        />
                    </div>
                    <div className='flex flex-row gap-2 items-center '>
                        <LabelledInput
                            label='Pincode'
                            id='pincode'
                            value={values.pincode}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='pincode'
                            error={errors.pincode}
                            touched={touched.pincode}
                            placeholder='Pincode'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='State'
                            id='state'
                            value={values.state}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='state'
                            error={errors.state}
                            touched={touched.state}
                            placeholder='State'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Country'
                            id='country'
                            value={values.country}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='country'
                            error={errors.country}
                            touched={touched.country}
                            placeholder='Country'
                        />
                    </div>

                    <LabelledInput
                        label='Email'
                        id='email'
                        value={values.email}
                        setFunction={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        name='email'
                        error={errors.email}
                        touched={touched.email}
                        placeholder='Email'
                    />
                    <LabelledInput
                        label='Password'
                        id='password'
                        value={values.password}
                        setFunction={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        name='password'
                        error={errors.password}
                        touched={touched.password}
                        placeholder='Password'
                    />
                    <SubmitButton
                        text='Register'
                        isLoading={isLoading}
                        variant='outline'
                        spinnerPlacement='start'
                        loadingText='Registering'
                    />
                </form>
            </SignupLayout>
        </>
    );
};

export default page;
