import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import { StepContext } from '../contexts/StepContext';
import { ArchitectContext } from '../contexts/ArchitectContext';
import { VisionaryContext } from '../contexts/VisionaryContext';
import { CloudsContext } from '../contexts/CloudsContext';
import './InputForm.css';

const InputForm = (props) => {
  const { addInput } = useContext(FormContext);
  const { handleNextArchitectStep } = useContext(ArchitectContext);
  const { handleNextVisionaryStep } = useContext(VisionaryContext);
  const { handleNextCloudStep } = useContext(CloudsContext);
  const { handleNext, handleNextPlaceStep, handleNextMissionStep } = useContext(
    StepContext
  );
  const [value, setValue] = useState('');
  console.log('childinput: ', props.childInput);

  const handleSubmit = (event) => {
    console.log(props);
    event.preventDefault();

    /* submit */
    addInput(value, props.childInput);

    /* maybe */
    /* setClicked(true); */

    /* next step */
    if (props.next === 'place') {
      handleNextPlaceStep();
    } else if (props.next === 'cloud') {
      handleNextCloudStep();
    } else if (props.next === 'architect') {
      handleNextArchitectStep();
    } else if (props.next === 'visionary') {
      handleNextVisionaryStep();
    } else if (props.next === 'mission') {
      handleNextMissionStep();
    } else {
      handleNext();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cursor">
        <input
          autoFocus
          type="text"
          value={value}
          onChange={onChange}
          className="input-styling"
        />
      </div>
      <div className="box-3">
        {value.length < 2 ? (
          <div className="center-btn">
            <p>Please fill out the question..</p>
          </div>
        ) : value.length > 100 ? (
          <div className="center-btn">
            <p>Max 100 characters. Be more concise. No fluff.</p>
          </div>
        ) : (
          <div className="btn btn-three" onClick={handleSubmit}>
            <span>Enter</span>
          </div>
        )}
      </div>
    </form>
  );
};

export default InputForm;
