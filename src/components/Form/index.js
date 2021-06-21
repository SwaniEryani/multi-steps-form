import React, { useState } from 'react';
import useStep from '../../Providers/useSteps';
import FormContext from '../../Context/FormContext';
import SetFormContext from '../../Context/SetFormContext';
import Name from './Name';
import Address from './Address';
import Review from './Review';
import Contact from './Contact';

import './index.css';


const NAME = "NAME";
const ADDRESS = "ADDRESS";
const CONTACT = "CONTACT";
const REVIEW = "REVIEW";

const Form = () => {
  const { step, transition, back } = useStep(NAME);
  const [formData, setFormData] = useState({});


  return (
    <FormContext.Provider value={formData}>
      <SetFormContext.Provider value={setFormData}>

        <div className="form">
          <h2>Multi Step Form</h2>
          {step === NAME && <Name onNext={() => transition(ADDRESS)} />}
          {step === ADDRESS && <Address onNext={() => transition(CONTACT)} onBack={back} />}
          {step === CONTACT && <Contact onNext={() => transition(REVIEW)} onBack={back} />}
          {step === REVIEW && <Review onBack={back} />}
        </div>
      </SetFormContext.Provider>
    </FormContext.Provider>
  )
}

export default Form
