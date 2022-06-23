import React from 'react';
import axios from 'axios';
import InputBox from '../components/Inputbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddEmployee() {
  var url = 'http://127.0.0.1:8000/api/user';
  var navigate = useNavigate();

  const [personInfo, setPersonInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    class: '',
    password: '',
  });

  const handleChange = (e) => {
    setPersonInfo({
      ...personInfo,
      [e.target.name]: e.target.value
    })
    // console.log(personInfo.fname);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, personInfo)
      .then(res => {
        console.log(res.data);
        Swal.fire('Employee Added')
        navigate('/');
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='bg-gray-300'>
      <div className='h-screen pt-4 w-full flex justify-center items-center'>
        <div className='bg-white h-3/4 md:w-5/12 w-8/12 flex justify-center items-center rounded-md py-6'>
          <form className='flex h-5/6 w-3/4 justify-center items-center' onSubmit={handleSubmit}>
            <div>
              <InputBox name='fname' inputType='text' inputLabel='First Name' onChange={handleChange} />
              <InputBox name='lname' inputType='text' inputLabel='Last Name' onChange={handleChange} />
              <InputBox name='class' inputType='text' inputLabel='Class' onChange={handleChange} />
              <InputBox name='email' inputType='email' inputLabel='Email' onChange={handleChange} />
              <InputBox name='password' inputType='password' inputLabel='Password' onChange={handleChange} />
              <button type='submit' className='px-4 py-2 bg-purple-500 mt-2 rounded'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee