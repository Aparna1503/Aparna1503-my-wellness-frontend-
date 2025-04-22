import React from "react";

const LabelledSelect = (props) => {
    return (
        <>
            <div
                style={props.style}
                className='flex flex-col border rounded transition-[0.3s] mb-5 pt-2.5 pb-2 px-2.5 border-solid border-[#ddd]'
            >
                <label
                    htmlFor={props.id}
                    style={props.style}
                    className='text-[12px] uppercase font-semibold tracking-[0.7px] text-[teal] transition-[0.3s]'
                >
                    {props.label}
                </label>
                <select
                    id={props.id}
                    style={props.style}
                    className='outline-none text-sm pt-1 pb-0 px-0 border-0 placeholder-[#ccc] mt-[4px]'
                    defaultValue={props.value}
                    name={props.name}
                    onChange={props.setFunction}
                >
                    <option className='bg-white text-[15px]' value='Male'>
                        Male
                    </option>
                    <option className='bg-white text-[15px]' value='Female'>
                        Female
                    </option>
                    <option className='bg-white text-[15px]' value='Others'>
                        Others
                    </option>
                </select>

                {props.error && props.touched ? (
                    <p style={props.style} className='text-[0.8rem] text-[#b22b27] mt-[4px]'>
                        {props.error}
                    </p>
                ) : null}
            </div>
        </>
    );
};

export default LabelledSelect;
