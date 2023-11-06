function Validation(values){
    let error = {}
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const password_pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/

    // if(values.email == ""){
    //     error.email="Email should not be empty";
    // }
    // else 
    if(!email_pattern.test(values.email)){
        error.email="Email Didn't match"

    } else {
        error.email = ""
    }
    // if(values.password == ""){
    //     error.password= "Password shouldnot be empty"
    // }
    // else
     if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error;


}

export default Validation;