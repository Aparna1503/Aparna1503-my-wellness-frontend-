import React, { useState } from "react";
import axios from "axios";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoaderModal from "../common/LoaderModal";

const LoginLayout = (props) => {
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const configCreator = (user) => {
        switch (user) {
            case "admin":
                return {
                    url: "https://mywellness-paras248.koyeb.app/api/auth/login/admin",
                    tokenName: "adminToken",
                    onSuccesRouteToPath: "/admin/signup/patient",
                };
            case "hospital":
                return {
                    url: "https://mywellness-paras248.koyeb.app/api/auth/login/hospital",
                    tokenName: "hospitalToken",
                    onSuccesRouteToPath: "/hospital/search",
                };
            case "chemist":
                return {
                    url: "https://mywellness-paras248.koyeb.app/api/auth/login/chemist",
                    tokenName: "chemistToken",
                    onSuccesRouteToPath: "/chemist/search",
                };
        }
    };

    const { url, tokenName, onSuccesRouteToPath } = configCreator(props.loginFor);

    const router = useRouter();

    const handleClick = () => setShow(!show);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setError(false);
        setIsLoading(true);
        const options = {
            method: "POST",
            url,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                username: userId,
                password,
            },
        };
        axios
            .request(options)
            .then((response) => {
                localStorage.setItem(tokenName, response.data);
                setIsLoading(false);
                router.push(onSuccesRouteToPath);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data);
                setIsLoading(false);
            });
    };
    const onUserIdChangeHandler = (event) => {
        setUserId(event.target.value.trim());
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value.trim());
    };

    return (
        <>
            <div className='grid grid-cols-2 min-h-[80vh]'>
                {isLoading && <LoaderModal />}
                <form
                    className='flex flex-col mt-[20%] ml-[25%] mr-[25%] gap-3'
                    onSubmit={formSubmitHandler}
                >
                    <p className='text-[25px] font-bold mb-3'>SignIn</p>
                    {error && <p className='text-[red] text-[12px]'>{errorMessage}</p>}
                    <Input
                        placeholder={props.placeholder}
                        type='text'
                        className='rounded-[2px] border-black text-[17px] mb-[10px h-[40px] px-[10px] py-[0] focus:border-b-[3px] focus:border-black'
                        focusBorderColor='transparent'
                        outline={false}
                        value={userId}
                        onChange={(e) => onUserIdChangeHandler(e)}
                        _placeholder={{ color: "black" }}
                    />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? "text" : "password"}
                            placeholder='Password'
                            className='rounded-[2px] border-black text-[17px] mb-[10px] h-[40px] px-[10px] py-[0] focus:border-b-[3px] focus:border-black'
                            focusBorderColor='transparent'
                            outline={false}
                            value={password}
                            onChange={(e) => onPasswordChangeHandler(e)}
                            _placeholder={{ color: "black" }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        isLoading={isLoading}
                        type='submit'
                        loadingText='Logging In'
                        className='h-[40px] bg-[#2935e0] hover:bg-black rounded-[5px] text-[white] font-bold text-[15px] outline-none border-none transition duration-270 ease-linear'
                        variant='outline'
                        spinnerPlacement='start'
                    >
                        Login
                    </Button>
                </form>
                <div className='grid justify-items-center items-center'>
                    <Image
                        className='max-w-[31.25rem] '
                        alt='background img'
                        src={props.imageSource}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginLayout;
