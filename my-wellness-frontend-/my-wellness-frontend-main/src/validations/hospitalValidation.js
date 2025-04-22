import * as yup from "yup";

export const hospitalSchema = yup.object().shape({
    name: yup.string().min(2).required("Please enter name"),
    contactNo: yup.string().required("Please enter contact number"),
    address: yup.string().min(5).required("Please enter address"),
    city: yup.string().required("Please enter city"),
    pincode: yup.string().required("Please enter pincode"),
    state: yup.string().required("Please enter state"),
    country: yup.string().required("Please enter country"),
    email: yup.string().email().required("Please enter email"),
    password: yup.string().min(6).max(15).required("Please enter password"),
    type: yup.string().required("Please enter type (for eg: Multispeciality)"),
});
