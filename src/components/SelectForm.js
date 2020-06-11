import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import { StepContext } from '../contexts/StepContext';

/* import './InputForm.css'; */

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { unsatisfied, attribute } from '../assets/data/questionOptions';

const animatedComponents = makeAnimated();

const ownStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'black' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: 'black',
      color: '#FFF',
    };
  },
};

const SelectForm = (childInput) => {
  const { addMultiInput } = useContext(FormContext);
  const { handleNext, handleNextPlaceStep } = useContext(StepContext);

  const [value, setValue] = useState([]);
  const [clicked, setClicked] = useState(null);

  console.log('childinput: ', childInput.childInput);

  const handleSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    addMultiInput(value, childInput.childInput);
    setClicked(true);
    if (childInput.childInput === 'unsatisfied') {
      handleNext();
    } else {
      handleNextPlaceStep();
    }
  };

  const handleMultiChange = (option) => {
    console.log('value: ', value);
    console.log('option: ', option);
    setValue((value) => {
      return {
        value: option,
      };
    });
  };

  return (
    <>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={
          childInput.childInput === 'unsatisfied' ? unsatisfied : attribute
        }
        styles={ownStyles}
        className="black-background"
        /* value={value} */
        onChange={handleMultiChange}
      />
      <div className="box-3">
        <div className="btn btn-three" onClick={handleSubmit}>
          {clicked ? <span>Submitted</span> : <span>Enter</span>}
        </div>
      </div>
    </>
  );
};

export default SelectForm;
