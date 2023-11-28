function Validation(values) {

    let error = {}

    // const userName_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if (values.userName === "") {
        error.userName = "Name should not be empty"
    }
    // else if (!userName_pattern.test(values.userName)) {
    //     error.userName = "userName Didn't match"   /* Check userName*/
    // }
    else { error.userName = "" }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }
    // else if (!password_pattern.test(values.password)) {
    //     error.password = "Password didn't match"
    // }
    else {
        error.password = ""
    }

    return error;
}
export default Validation;