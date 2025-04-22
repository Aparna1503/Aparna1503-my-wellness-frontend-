import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import IdCard from "./IdCard";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const IdModal = ({ isOpen, onClose, ...props }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: props.id,
    });

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent minWidth='fit-content' className='p-[20px]'>
                <ModalHeader>Registered Successfully!!</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <IdCard componentRef={componentRef} {...props} />
                </ModalBody>

                <ModalFooter>
                    <Button className='bg-[#1fbea9] ' onClick={handlePrint}>
                        Print
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default IdModal;
