import React from 'react';
import Employee from './Screen/Employee';
import AddEmployee from './Screen/AddEmployee';
import EditEmployee from './Screen/EditEmployee';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Empty from './Empty';

function App() {
  return (
    <div className='App'>
      <Router >
        <Routes>
          <Route exact path='/' element={<Employee />} />
          <Route path='edit/:id' element={<EditEmployee />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
