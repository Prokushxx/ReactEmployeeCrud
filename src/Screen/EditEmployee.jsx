import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import InputBox from '../components/Inputbox';

function EditEmployee() {
  let params = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState({
    fname: '',
    lname: '',
    class: '',
    email: '',
    password: '',
  });

  function getEmployeeData() {
    axios.get(`http://127.0.0.1:8000/api/user/${params.id}`)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getEmployeeData();
  }, []);


  function handleChange(e) {
    const { name, value } = e.target;
    setData(
      (previous) => ({
        ...previous,
        [name]: value
      })
    )
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/user/${params.id}`, data)
      .then(res => {
        Swal.fire('Information Updated')
        console.log(res.data);
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
              <InputBox name='fname' inputType='text' inputLabel='First Name' onChange={handleChange} value={data.fname} />
              <InputBox name='lname' inputType='text' inputLabel='Last Name' onChange={handleChange} value={data.lname} />
              <InputBox name='class' inputType='text' inputLabel='Class' onChange={handleChange} value={data.class} />
              <InputBox name='email' inputType='email' inputLabel='Email' onChange={handleChange} value={data.email} />
              <button type='submit' className='px-4 py-2 bg-purple-500 mt-2 rounded'>Edit</button>
              <button onClick={() => navigate('/')} className='px-4 py-2 bg-purple-700 ml-4 text-white mt-2 rounded'>Home</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee