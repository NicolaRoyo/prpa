export const validateNewsSignupForm = (values) => {
    const errors = {};

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    } else if (!values.email) {
        errors.email = 'Required';
    } else if (values.email.length < 3) {
        errors.email = 'Must be at least 3 characters.';
    } 

    return errors;
};