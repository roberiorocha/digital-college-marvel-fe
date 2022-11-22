import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is require"),
    repeatpassword: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is require"),
});

export const useSignUpForm = ({
    onSubmit
}) => {
    return useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatpassword: "",
        },
        onSubmit,
        validationSchema: Schema,
        validateOnBlur: true,
        validateOnChange: false,
    });
};

