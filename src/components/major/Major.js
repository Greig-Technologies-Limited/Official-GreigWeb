import React from 'react';
import { AiFillThunderbolt, AiFillTool } from 'react-icons/ai';
import { GiBinoculars } from 'react-icons/gi';
import './Major.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Major = () => {
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

  return (
    <div className='major'>
      <div className="majorContainer">
        <div className="childHolder">
          <motion.div
            className="child"
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={variants}
            transition={{ duration: 4 }} // Adjust the duration as needed
          >
            <AiFillThunderbolt size={40} style={{ color: 'green' }} />
            <h1>Maritime</h1>
            <p>
              We provide secure Oil &Gas
              satellite communications – from
              point-to-point SCPC links to Mesh
              networks delivering single-hop
              access between multiple remote
              sites.
            </p>
          </motion.div>
          <motion.div
            className="child"
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variants}
            transition={{ duration: 4 }} // Adjust the duration as needed
          >
            <AiFillTool size={40} style={{ color: 'green' }} />
            <h1>Satellite Equipment</h1>
            <p>
              We currently provide satellite
              communications technology to
              onshore and offshore sites and is
              propelling itself as the leading
              provider of premium networks.
            </p>
          </motion.div>
          <motion.div
            className="child"
            ref={ref3}
            animate={controls3}
            initial="hidden"
            variants={variants}
            transition={{ duration: 4 }} // Adjust the duration as needed
          >
            <GiBinoculars size={40} style={{ color: 'green' }} />
            <h1>Navigation & Security</h1>
            <p>
              Our ERP systems can collect and
              send more information between
              ship and shore in real-time to
              provide valuable insight into
              operations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Major;
