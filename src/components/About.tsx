import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Shield, Cpu, Circuit, Server, Car, Waves, ChipIcon, MapPin, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-beige">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-darkTeal mb-4">
          About Us
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-maroon mx-auto mb-6"></motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg text-darkTeal leading-relaxed">
            At <span className="font-semibold text-maroon">Ion Semiconductors</span>, we are dedicated to empowering aspiring professionals by aligning their skills with the demands of the industry. As a leading provider of VLSI frontend and backend training, we bring over three years of proven expertise to the table.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-darkTeal leading-relaxed">
            Our comprehensive training programs are meticulously crafted to bridge the gap between academic knowledge and real-world industry requirements. We ensure that our employees are fully equipped and make them valuable assets to future projects. Join us in shaping your career!
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="/images/web-images/image.jpg" 
            alt="VLSI Training" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;