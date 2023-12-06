import React from 'react';
import './Client.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Client1 from '../../assets/cisco.png';
import Client2 from '../../assets/intellian.png';
import Client3 from '../../assets/idierect.png';
import Client4 from '../../assets/comtech.png';
import Client9 from '../../assets/sailor.jpg';
import Client10 from '../../assets/OneWeb_Logo.png';
import Client11 from '../../assets/Starlink_Logo.svg.png';

const Client = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='clients'>
      <div className="clientsContainer" ref={ref}>
        <div className="heading">
          <h1>Technological Partners</h1>
          <hr />
        </div>
        <motion.div
          className="clientsImg"
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          <img src={Client1} alt="" />
          <img src={Client2} alt="" />
          <img src={Client3} alt="" />
          <img src={Client4} alt="" />
          <img src={Client9} alt="" />
          <img src={Client10} alt="" />
          <img src={Client11} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
