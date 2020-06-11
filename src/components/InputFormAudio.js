import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import './InputFormAudio.css';

const InputFormAudio = () => {
  const { addInput } = useContext(FormContext);
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(null);

  let audio = new Audio('../keystroke.mp3');

  const handleSubmit = (event) => {
    event.preventDefault();
    addInput(value);
    setClicked(true);
  };

  const onChange = (event) => {
    setValue(event.target.value);
    audio.play();
  };

  return (
    <form>
      <div className="cursor">
        <input
          autoFocus
          type="text"
          value={value}
          onChange={onChange}
          className="input-styling"
        />
        <i></i>
      </div>
      <div class="box-3">
        <div class="btn btn-three" onClick={handleSubmit}>
          {clicked ? <span>Check</span> : <span>Enter</span>}
        </div>
      </div>
    </form>
  );
};

export default InputFormAudio;
