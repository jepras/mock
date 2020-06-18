import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import { StepContext } from '../contexts/StepContext';
import { ArchitectContext } from '../contexts/ArchitectContext';
import { VisionaryContext } from '../contexts/VisionaryContext';
import { CloudsContext } from '../contexts/CloudsContext';

/* import './InputForm.css'; */

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import {
  unsatisfied,
  attribute,
  characteristics,
  role,
  gender,
  age,
  colour,
  basicValues,
} from '../assets/data/questionOptions';

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

const SelectForm = (props) => {
  const { addMultiInput } = useContext(FormContext);
  const { handleNextArchitectStep } = useContext(ArchitectContext);
  const { handleNextVisionaryStep } = useContext(VisionaryContext);
  const { handleNextCloudStep } = useContext(CloudsContext);
  const { handleNext, handleNextPlaceStep, handleNextMissionStep } = useContext(
    StepContext
  );

  const [value, setValue] = useState([]);
  const [clicked] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    /* submit */
    addMultiInput(value, props.childInput);

    /* maybe */
    /* setClicked(true); */

    console.log('logging: ', value);
    console.log('props: ', props);

    /* next step */
    if (props.next === 'place') {
      handleNextPlaceStep();
    } else if (props.next === 'cloud') {
      handleNextCloudStep();
    } else if (props.next === 'architect') {
      handleNextArchitectStep();
      /* 
      console.log('fading!');
      setTimeout(() => {
        console.log('Before next step');
        handleNextArchitectStep();
        console.log('AAAFTTTEEER next step');
      }, 2000);
      console.log('setTimeout done'); */
    } else if (props.next === 'visionary') {
      handleNextVisionaryStep();
    } else if (props.next === 'mission') {
      handleNextMissionStep();
    } else {
      handleNext();
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

  if (props.childInput === 'unsatisfied') {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={unsatisfied}
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
  }

  if (props.childInput === 'attribute') {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={attribute}
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
  }

  if (props.childInput === 'characteristics') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={characteristics}
          styles={ownStyles}
          className="black-background"
          isMulti
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
  }

  if (props.childInput === 'role') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={role}
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
  }

  if (props.childInput === 'gender') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={gender}
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
  }

  if (props.childInput === 'age') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={age}
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
  }

  if (props.childInput === 'colour') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={colour}
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
  }

  if (props.childInput === 'basicvalues') {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={basicValues}
          components={animatedComponents}
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
  }
};

export default SelectForm;
