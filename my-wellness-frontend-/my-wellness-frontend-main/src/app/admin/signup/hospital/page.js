"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";
import LoaderModal from "@/components/common/LoaderModal";
import { useFormik } from "formik";
import { hospitalSchema } from "@/validations/hospitalValidation";

const initialValues = {
    name: "",
    contactNo: "",
    address: "",
    type: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
};

const page = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: hospitalSchema,
        onSubmit: (values, action) => {
            setIsLoading(true);
            const data = {
                name: values.name.trim(),
                contact: values.contactNo.trim(),
                address: values.address.trim(),
                type: values.type.trim(),
                email: values.email.trim(),
                password: values.password.trim(),
                city: values.city.trim(),
                state: values.state.trim(),
                country: values.country.trim(),
                pincode: values.pincode.trim(),
            };

            const options = {
                method: "POST",
                url: "https://mywellness-paras248.koyeb.app/api/auth/signup/hospital",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
                data,
            };
            axios
                .request(options)
                .then((response) => {
                    setIsLoading(false);
                    action.resetForm();
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
    console.log(errors);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.hospitalId}
                    name={response.name}
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
                    <NavButton active href='/admin/signup/hospital' text='Register Hospital' />
                    <NavButton href='/admin/signup/chemist' text='Register Chemist' />
                </div>
                <div>
                    <LogoutButton logoutFor='admin' />
                </div>
            </Header>
            <SignupLayout heading='Register Hospital'>
                <form onSubmit={handleSubmit}>
                    {isLoading && <LoaderModal />}

                    <LabelledInput
                        style={{ flex: 1 }}
                        label='Name'
                        id='name'
                        value={values.name}
                        setFunction={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        name='name'
                        error={errors.name}
                        touched={touched.name}
                        placeholder='Hospital Name'
                    />
                    <div className='flex flex-row gap-2 items-center'>
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Contact'
                            id='contactNo'
                            value={values.contactNo}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='contactNo'
                            error={errors.contactNo}
                            touched={touched.contactNo}
                            placeholder='Contact'
                        />
                        <LabelledInput
                            style={{ flex: 1 }}
                            label='Type'
                            id='type'
                            value={values.type}
                            setFunction={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            name='type'
                            error={errors.type}
                            touched={touched.type}
                            placeholder='Type'
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
