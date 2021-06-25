import React, { useState } from 'react';
import useStep from '../../Providers/useSteps';
import FormContext from '../../Context/FormContext';
import Name from './Name';
import Address from './Address';
import Review from './Review';
import Contact from './Contact';
import Skills from './Skills';

import './index.css';


const NAME = "NAME";
const ADDRESS = "ADDRESS";
const CONTACT = "CONTACT";
const REVIEW = "REVIEW";
const SKILLS = "SKILLS";

const Form = () => {
  const { step, transition, back } = useStep(NAME);
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    birthdate: null,
    email:"",
    phone: "",
    city:"",
    country:"",
    province:"",
    skills:[]
  });


  return (
    <FormContext.Provider value={{
      values:{
        formData,
      },
      setters:{
        setFormData,
      }
    }}>
    

        <div className="form">
          <h2>Multi Step Form</h2>
          {step === NAME && <Name onNext={() => transition(ADDRESS)} />}
          {step === ADDRESS && <Address onNext={() => transition(CONTACT)} onBack={back} />}
          {step === CONTACT && <Contact onNext={() => transition(SKILLS)} onBack={back} />}
          {step === SKILLS && <Skills onNext={() => transition(REVIEW)} onBack={back} />}
          {step === REVIEW && <Review onBack={back} />}
        </div>

    </FormContext.Provider>
  )
}

export default Form
