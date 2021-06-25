import React, { useContext , useState} from 'react';
import FormContext from '../../Context/FormContext'
// import { Formik, Form, Field } from 'formik';

const Skills = ({ onNext, onBack }) => {

  
  const {values,setters} = useContext(FormContext);
  const {formData} = values;
  const {setFormData} = setters;
  const [skills, setSkills]= useState("");

  const skillsList = formData.skills.map(skill =><snap>{skill},</snap>);

  const addData= ()=>{
    setFormData({
      ...formData,
      skills:[...formData.skills, skills]
    })
    setSkills("")
  }

  return (
    <div>
      {skillsList && skillsList}
     <div className="flex-row">
      <input 
      className="custom-input" 
      name="skills"
      type="input"
      placeholder="Add Skills"
      onChange={event => setSkills(event.target.value)} 
       />
       <button 
      className="btn-blue-gradient"
        type="submit"
        onClick={()=>addData()}>
        Add
      </button>
      </div>
      <div className="flex-row">
      <button 
      className="btn-white-gradient"
        type="submit"
        onClick={onBack}>
        Back
      </button>
      <button className="btn-blue-gradient"
        type="submit"
        onClick={() => onNext()}>
        Next
      </button>
      </div>
    </div>
  )
}

export default Skills
