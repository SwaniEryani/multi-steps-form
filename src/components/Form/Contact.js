import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


function Contact({ onNext, onBack }) {

  const {values,setters} = useContext(FormContext);
  const {formData} = values;
  const {setFormData} = setters;

  const ContactSchema = Yup.object().shape({
    phone: Yup.number()
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handlClick = (data) => {
    console.log(data.birthdate)
    setFormData({
      ...formData,
      email: data.email,
      phone: data.phone
    })
    onNext();
  }

  return (
    <div>
      <Formik
        initialValues={{ email: formData.email, phone: formData.phone }}
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
