import React, { useState, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormContext from '../../Context/FormContext';
// import FormContext from '../../Context/FormContext';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const Name = ({ onNext }) => {

  const {values,setters} = useContext(FormContext);
  const {formData} = values;
  const {setFormData} = setters;
  const [birthDate, setBirthDate] = useState(new Date());

  const FullNameSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

  const handlClick = (data) => {

    setFormData({
      ...formData,
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: data.birthdate
    })
    onNext();
  }

  return (
    <div>
      <Formik
        initialValues={{ firstName: formData.firstName , lastName: formData.lastName, birthdate: birthDate }}
        validationSchema={FullNameSchema}
        onSubmit={data => handlClick(data)}>
        {({ errors, touched }) => (
          <Form >
            <Field
              className="custom-input"
              name="firstName"
              type="input"
              placeholder="Your First Name"
            />
            {errors.firstName && touched.firstName ? (
              <div className="red_error">{errors.firstName}</div>
            ) : null}
            <Field
              className="custom-input"
              name="lastName"
              type="input"
              placeholder="Your Last Name"
            />
            {errors.lastName && touched.lastName ? (
              <div className="red_error">{errors.lastName}</div>
            ) : null}
            <DatePicker className="datepicker"
              selected={birthDate} onChange={(date) => setBirthDate(date)} />
            <div className="flex_dir_end">
              <button className="btn-blue-gradient"
                type="submit">
                Next
              </button>
            </div>

          </Form>
        )}

      </Formik>

    </div>
  )
}

export default Name;
