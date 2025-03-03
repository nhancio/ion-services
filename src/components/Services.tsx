import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, Code, Wrench, Shield, Layout, 
  Layers, Zap, Car, Server
} from 'lucide-react';

const servicesData = [
  {
    title: "Design and Verification Services",
    content: "Silicon design engineering services company to Tapeout multiple SoC's with expertise across verification disciplines: IP/SoC design and development, IP/Subsystem/SoC verification, Formal, Low Power, Mixed signal ASIC.",
    icon: <Cpu className="h-10 w-10" />
  },
  {
    title: "IC Design",
    content: "Architecture Modelling, Micro-Architecture Definition, IP/Subsystem/SoC Design, Low Power Design, expertise in various protocols including PCIE, USB, DDR, HDMI, and more.",
    icon: <Layers className="h-10 w-10" />
  },
  {
    title: "Chip Verification",
    content: "Comprehensive verification services including UVM methodology, test plan development, functional coverage, and low power verification.",
    icon: <Shield className="h-10 w-10" />
  },
  {
    title: "Integration Services",
    content: "Full language support for Verilog, SystemVerilog, VHDL with IP-XACT, UPF, SDC, LEF/DEF support and physically aware integration process.",
    icon: <Layout className="h-10 w-10" />
  },
  {
    title: "DFT and Testing",
    content: "Complete DFT architecture, methodology & flow including scan insertion, BIST, JTAG implementation, and test coverage analysis.",
    icon: <Wrench className="h-10 w-10" />
  },
  {
    title: "Automotive ISO 26262",
    content: "ASIL-B/ASIL-D Functional Safety Activities, consulting, and automotive-grade design and testing services.",
    icon: <Car className="h-10 w-10" />
  },
  {
    title: "Analog Circuits",
    content: "Design and implementation of CMOS Amplifiers, PLLs, SERDES blocks, and PMIC components with full verification procedures.",
    icon: <Zap className="h-10 w-10" />
  }
];

const serviceModels = [
  "Time & Material Model",
  "Offshore Development Centre (ODC) Model",
  "Turnkey Model",
  "Built-Operate-Transfer (BOT) Model"
];

const domains = [
  "Networking (Ethernet Packet Processing SoCs)",
  "Data centre (CxL/PCIe based SoCs)",
  "HPC (Heterogeneous computing)",
  "Automotive SoCs (ISO 26262)",
  "5G (Open RAN baseband SoCs)",
  "DSP and AI (AI accelerators)",
  "Edge Computing (RISCV based SoCs)"
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
      </motion.div>

      {/* Main Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Service Models Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Service Models</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceModels.map((model, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-blue-800">{model}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Domains Section */}
      <motion.section variants={itemVariants}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Domains</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">{domain}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
