import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react";
import LoaderAnimation from "../../../public/loader-animation.json";

import Lottie from "lottie-react";

const LoaderModal = () => {
    return (
        <Modal isOpen={true} isCentered={true}>
            <ModalOverlay className='flex flex-row justify-center items-center'>
                <Lottie animationData={LoaderAnimation} loop={true} className='w-[10rem]' />
            </ModalOverlay>
        </Modal>
    );
};

export default LoaderModal;
