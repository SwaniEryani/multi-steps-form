import React, { useContext } from 'react'
import SetFormContext from '../../Context/SetFormContext'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


function Contact({ onNext, onBack }) {

  const setFormData = useContext(SetFormContext);

  const ContactSchema = Yup.object().shape({
    phone: Yup.number()
      .min(9, 'Too Short!')
      .max(9, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handlClick = (data) => {
    console.log(data.birthdate)
    setFormData((prev) => ({
      ...prev,
      email: data.email,
      phone: data.phone
    }))
    onNext();
  }

  return (
    <div>
      <Formik
        initialValues={{ email: "", phone: "" }}
        validationSchema={ContactSchema}
        onSubmit={data => handlClick(data)}>
        {({ errors, touched }) => (
          <Form >
            <Field
              className="custom-input"
              name="email"
              type="input"
              placeholder="Your Email"
            />
            {errors.email && touched.email ? (
              <div className="red_error">{errors.email}</div>
            ) : null}
            <Field
              className="custom-input"
              name="phone"
              type="input"
              placeholder="Your Phone"
            />
            {errors.phone && touched.phone ? (
              <div className="red_error">{errors.phone}</div>
            ) : null}
            <button className="btn-white-gradient"
              type="submit"
              onClick={onBack}>
              Back
            </button>
            <button className="btn-blue-gradient"
              type="submit">
              Submit
            </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default Contact
