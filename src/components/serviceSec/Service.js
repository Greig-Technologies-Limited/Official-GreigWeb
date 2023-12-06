import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { IoBoatSharp } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Service = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });

  const controls6 = useAnimation();
  const [ref6, inView6] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls2, inView2]);

  React.useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls3, inView3]);

  React.useEffect(() => {
    if (inView4) {
      controls4.start('visible');
    }
  }, [controls4, inView4]);

  React.useEffect(() => {
    if (inView5) {
      controls5.start('visible');
    }
  }, [controls5, inView5]);

  React.useEffect(() => {
    if (inView6) {
      controls6.start('visible');
    }
  }, [controls6, inView6]);

  return (
    <div className='service'>
      <div className="serviceContainer">
        <h1>Services</h1>
        <hr />
        <p>
          Empower your connectivity with our unparalleled service, delivering seamless solutions that cater to your needs, ensuring reliability, speed, and a superior user experience.
        </p>
        <div className="serviceChildHolder">
          <motion.div
            className="serviceChild"
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='/OnewebPage'><h4>Oneweb</h4></Link>
              <p>
                With OneWeb’s we bring fibre-like speeds to maritime connectivity. With OneWeb’s low latency, connection at....
              </p>
            </div>
          </motion.div>
          <motion.div
            className="serviceChild"
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='/StarlinkPage'><h4>Starlink</h4></Link>
              <p>
                Starlink Maritime is a satellite communication service specifically designed for maritime applications. It offers high-speed....
              </p>
            </div>
          </motion.div>
          <motion.div
            className="serviceChild"
            ref={ref3}
            animate={controls3}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='MaritimePage'><h4>Maritime VSAT</h4></Link>
              <p>
                Experience unlimited usage and reliable Maritime VSAT internet with Castor Marine. Our High Speed VSAT....
              </p>
            </div>
          </motion.div>
        </div>
        <div className="serviceChildHolder">
          <motion.div
            className="serviceChild"
            ref={ref4}
            animate={controls4}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='/IridiumPage'><h4>Iridium</h4></Link>
              <p>
                With Iridium Certus onboard, your vessels benefit from oceanwide L-based connectivity. It is designed for...
              </p>
            </div>
          </motion.div>
          <motion.div
            className="serviceChild"
            ref={ref5}
            animate={controls5}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='/FleetBBPage'><h4>Fleet Broadband</h4></Link>
              <p>
                You want your connectivity to be seamless and flawless. Inmarsat is a backup service for maritime VSAT services that is....
              </p>
            </div>
          </motion.div>
          <motion.div
            className="serviceChild"
            ref={ref6}
            animate={controls6}
            initial="hidden"
            variants={variants}
          >
            <IoBoatSharp size={40} style={{ color: 'green' }} />
            <div className="serviceChildContent">
              <Link to='/ItconsultPage'><h4>Value Added Services</h4></Link>
              <p>
                In addition to managing your (hybrid) networks, Greig Technologies Limited can deliver your fleet’s onboard IT infrastructure. Let’s be honest: managing....
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
