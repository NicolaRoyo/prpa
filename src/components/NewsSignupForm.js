
import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateNewsSignupForm } from '../utils/validateNewsSignupForm';

const NewsSignupForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                email: ''
            }}
            onSubmit={handleSubmit}
            validate={validateNewsSignupForm}
        >
            <Form>
                <h3 
                    className='text-primary' 
                    style={{textAlign: "center"}}
                >
                    Sign up for our newsletter to get PRPA event reminders!
                </h3>
                <FormGroup row >
                    <Label htmlFor='email' xs='2' style={{textAlign: "center" }} >
                        Email
                    </Label>
                    <Col md='8'>
                        <Field
                            name='email'
                            placeholder='Email' 
                            type='email'
                            className='form-control' 
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 4, offset: 2 }} >
                        <Button type='submit' color='primary'>
                            SUBSCRIBE
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};



export default NewsSignupForm;