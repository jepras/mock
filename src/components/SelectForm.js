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
  colourAttributes,
  presentvalues,
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
  menuList: (styles) => ({
    ...styles,
    maxHeight: '150px',

    borderTop: '0px black !important',
  }),
};

const SelectForm = (props) => {
  const { addMultiInput } = useContext(FormContext);
  const { handleNextArchitectStep } = useContext(ArchitectContext);
  const { handleNextVisionaryStep } = useContext(VisionaryContext);
  const { handleNextCloudStep } = useContext(CloudsContext);
  const { handleNext, handleNextPlaceStep, handleNextMissionStep } = useContext(
    StepContext
  );

  const [option, setOption] = useState([]);
  const [value, setValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    /* submit */
    addMultiInput(value, props.childInput);

    /* maybe */

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
    setValue((value) => {
      return {
        value: option,
      };
    });
    setOption(option);
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
        {option && option.length === 3 ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.length === 3 ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }

  if (props.childInput === 'characteristics') {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={characteristics}
          styles={ownStyles}
          className="black-background"
          isMulti
          /* value={value} */
          onChange={handleMultiChange}
        />
        {option && option.length === 3 ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.value ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.value ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.value ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.value ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
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
        {option && option.length === 3 ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }

  if (props.childInput === 'presentvalues') {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={presentvalues}
          components={animatedComponents}
          styles={ownStyles}
          className="black-background"
          /* value={value} */
          onChange={handleMultiChange}
        />
        {option && option.length === 3 ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }

  if (props.childInput === 'colourAttributes') {
    return (
      <>
        <Select
          closeMenuOnSelect={true}
          options={colourAttributes}
          components={animatedComponents}
          styles={ownStyles}
          className="black-background"
          /* value={value} */
          onChange={handleMultiChange}
        />
        {option && option.value ? (
          <div className="box-3">
            <div className="btn btn-three" onClick={handleSubmit}>
              <span>Enter</span>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
};

export default SelectForm;
