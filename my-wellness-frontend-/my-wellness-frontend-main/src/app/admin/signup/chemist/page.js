"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import LabelledSelect from "@/components/signup/LabelledSelect";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";
import LoaderModal from "@/components/common/LoaderModal";
import { chemistSchema } from "@/validations/chemistValidation";
import { useFormik } from "formik";

const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    shopName: "",
    contactNo: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    qualification: "",
    email: "",
    password: "",
};

const page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: chemistSchema,
        onSubmit: (values, action) => {
            const data = {
                firstName: values.firstName,
                middleName: values.middleName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                contact: values.contactNo,
                qualification: values.qualification,
                shopName: values.shopName,
                address: values.address,
                city: values.city,
                state: values.state,
                pincode: values.pincode,
                country: values.country,
            };

            setIsLoading(true);
            const options = {
                method: "POST",
                url: "https://mywellness-paras248.koyeb.app/api/auth/signup/chemist",
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
                    action.resetForm();
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

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.chemistId}
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
                    <NavButton href='/admin/signup/patient' text='Register Patient' />
                    <NavButton href='/admin/signup/doctor' text='Register Doctor' />
                    <NavButton href='/admin/signup/hospital' text='Register Hospital' />
                    <NavButton active href='/admin/signup/chemist' text='Register Chemist' />
                </div>
                <div>
                    <LogoutButton logoutFor='admin' />
                </div>
            </Header>
            <SignupLayout heading='Register Chemist'>
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
                    <div className='flex flex-row gap-2 items-center'>
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
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Shop name'
                            id='shopname'
                            value={values.shopName}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='shopName'
                            error={errors.shopName}
                            touched={touched.shopName}
                            placeholder='Shop name'
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

                    <div className='flex flex-row gap-2 items-center'>
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

                    <div className='flex flex-row gap-2 items-center'></div>
                    <LabelledInput
                        label='Qualification'
                        id='qualification'
                        value={values.qualification}
                        setFunction={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        name='qualification'
                        error={errors.qualification}
                        touched={touched.qualification}
                        placeholder='Qualification'
                    />
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
