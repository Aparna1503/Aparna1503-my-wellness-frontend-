import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";

const Header = ({ children, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <header className='flex flex-row py-6 px-3 items-center justify-between' {...props}>
                <Link href='/' className='ml-4'>
                    <p className='text-[1.1em] text-[#1fbea9] font-bold '>MyWellness</p>
                </Link>
                <button
                    className='mr-[1em] transition duration-300 hover:rotate-180'
                    onClick={onOpen}
                >
                    <MenuIcon
                        style={{
                            height: "2rem",
                            width: "2rem",
                            color: "grey",
                        }}
                    />
                </button>
            </header>

            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerContent className='bg-gradient-to-r from-teal-600 to-teal-700'>
                    <DrawerHeader borderBottomWidth='0px'>
                        <DrawerCloseButton className='transition duration-500 hover:scale-150 hover:rotate-180 text-white text-[15px]' />
                    </DrawerHeader>
                    <DrawerBody>
                        <div className='h-[100%] flex flex-col gap-4 mr-4 justify-between'>
                            {children}
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;
