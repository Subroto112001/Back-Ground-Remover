import React from 'react'
import Header from '../component/Header'
import Steps from '../component/Steps';
import BgSlider from '../component/BgSlider';
import Testimonial from '../component/Testimonial';
import Upload from '../component/Upload';

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonial />
      <Upload/>
    </div>
  );
}

export default Home