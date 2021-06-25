import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'

function Review() {

  const {values} = useContext(FormContext);
  const {formData} = values;
  const skillsList = formData.skills.map((skill)=><span>{skill}, </span>
  )

  return (
    <div>
      <p><label> Your Name:  </label>{formData.firstName + " " + formData.lastName}</p>
      <p><label> Your BirthDate :</label> {formData.birthdate.toLocaleDateString()}</p>
      <p><label> Your Address :</label> {formData.city + ", " + formData.province + ", " + formData.country}</p>
      <p><label> Your Email :</label> {formData.email}</p>
      <p><label> Your Phone :</label> {formData.phone}</p>
      <p><label> Your Skills :</label> {skillsList}</p>
    </div>
  )
}

export default Review
