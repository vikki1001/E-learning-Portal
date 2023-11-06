import * as Yup from "yup";

export const Roleschema = Yup.object({
    rolename: Yup.string().required("Please enter your role name"),
    rolecode: Yup.string().required("Please enter your role code"),
    level:    Yup.string().required("Please enter your role code"),
});