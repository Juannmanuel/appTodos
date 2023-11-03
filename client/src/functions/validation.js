function validation(input) {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (input.password.length > 15) {
        errors.password = "Password should be up to 15 characters.";
    } else if (input.password.length < 1) {
        errors.password = "Password should contain at least one character.";
    }

    return errors;
}

export default validation;
