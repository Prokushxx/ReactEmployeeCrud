import React, { useState } from "react";

const InputBox = (props) => {
  
  return (
    <div className='mt-4'>
      <div>
        <label className='text-md text-gray-700'>{props.inputLabel}</label>
      </div>
      <div>
        <input type={props.inputType}
          className='w-full border-2 border-gray-600 rounded-lg px-4 py-2'
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={`Enter ${props.inputLabel}`}
        />
      </div>
    </div>
  );
}
export default InputBox;