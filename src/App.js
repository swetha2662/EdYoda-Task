import React from 'react';
import CoursePlan from './components/CoursePlan';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';

const App = () => {
  return (
    <div>
      <Navbar />
      <CoursePlan />
      <Mainpage/>
      
    </div>
  );
};

export default App;
