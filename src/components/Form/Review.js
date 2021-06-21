import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'

function Review() {
  const FormData = useContext(FormContext);
  return (
    <div>
      <p><label> Your Name:  </label>{FormData.firstName + " " + FormData.lastName}</p>
      <p><label> Your BirthDate :</label> {FormData.birthdate.toLocaleDateString()}</p>
      <p><label> Your Address :</label> {FormData.city + ", " + FormData.province + ", " + FormData.country}</p>
      <p><label> Your Email :</label> {FormData.email}</p>
      <p><label> Your Phone :</label> {FormData.phone}</p>
    </div>
  )
}

export default Review
