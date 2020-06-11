import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import { StepContext } from '../contexts/StepContext';
import './InputForm.css';

const InputForm = (props) => {
  const { addInput } = useContext(FormContext);
  const { handleNextMissionStep, handleNextPlaceStep, handleNext } = useContext(
    StepContext
  );
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(null);
  console.log('childinput: ', props.childInput);

  const handleSubmit = (event) => {
    console.log(props);
    event.preventDefault();
    addInput(value, props.childInput);
    setClicked(true);

    console.log('phase: ', props.phase);
    if (props.phase === 'place') {
      console.log('phase == phase:', props.phase);
      handleNextPlaceStep();
    } else {
      handleNextMissionStep();
    }

    if (props.childInput === 'shared') {
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
        <div className="btn btn-three" onClick={handleSubmit}>
          {clicked ? <span>Submitted</span> : <span>Enter</span>}
        </div>
      </div>
    </form>
  );
};

export default InputForm;
