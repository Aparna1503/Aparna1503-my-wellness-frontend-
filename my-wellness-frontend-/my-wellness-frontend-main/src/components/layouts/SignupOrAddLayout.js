import React from "react";

const SignupOrAddLayout = (props) => {
    return (
        <div className='absolute w-full bg-[#f7f7f7] min-h-[100vh]'>
            <p className='text-[20px] mb-[15px] font-bold ml-[20%] mt-[5%]'>{props.heading}</p>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {
                    className:
                        "flex flex-col ml-[20%] mr-[20%] py-[40px] px-[45px] bg-white rounded-[5px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] mb-[10rem]",
                });
            })}
        </div>
    );
};

export default SignupOrAddLayout;
