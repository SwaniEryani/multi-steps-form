import React, { useContext } from 'react';
import FormContext from '../../Context/FormContext'
import { Formik, Form, Field } from 'formik';

function Address({ onNext, onBack }) {

  const {values,setters} = useContext(FormContext);
  const {formData} = values;
  const {setFormData} = setters;

  const handlClick = (data) => {
    console.log(data.birthdate)
    setFormData({
      ...formData,
      city: data.city,
      province: data.province,
      country: data.country
    })
    onNext();
  }


  return (
    <div>
      <Formik
        initialValues={{ city: formData.city, province: formData.province, country: formData.country }}
        onSubmit={data => handlClick(data)}>
        {() => (
          <Form >
            <Field
              className="custom-input"
              name="city"
              type="input"
              placeholder="City"
            />
            <Field
              className="custom-input"
              name="province"
              type="input"
              placeholder="Province"
            />
            <Field
              className="custom-input"
              name="country"
              type="input"
              placeholder="Country"
            />
            <button className="btn-white-gradient"
              onClick={onBack}
            >
              Back
            </button>
            <button className="btn-blue-gradient"
              type="submit" >
              Next
            </button>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default Address
