import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { useToast } from "@chakra-ui/react";

const SearchPatient = (props) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const toast = useToast();

    const searchAs = props.searchAs;

    useEffect(() => {
        if (error) {
            toast({
                title: errorMessage,
                status: "error",
                isClosable: false,
                position: "bottom-right",
                duration: 2000,
            });
        }
    }, [error, errorMessage]);

    return (
        <div className='opacity-[0.9] bg-gradient-to-r from-sky-500 to-indigo-500 min-h-[100vh] min-w-screen bg-[100%] bg-no-repeat'>
            <SearchInput
                setError={setError}
                setErrorMessage={setErrorMessage}
                searchAs={searchAs}
            />
        </div>
    );
};

export default SearchPatient;
