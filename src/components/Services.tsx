import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Cpu, Layers, Shield, Layout, Wrench, Car, Zap } from 'lucide-react';

// Add new service cards data
const serviceCards = [
  {
    title: "Design and Verification Services",
    content: "Silicon design engineering services company to Tapeout multiple SoC's with expertise across verification disciplines: IP/SoC design and development, IP/Subsystem/SoC verification, Formal, Low Power, Mixed signal ASIC.",
    icon: <Cpu className="h-10 w-10 text-black" />
  },
  {
    title: "IC Design",
    content: "Architecture Modelling, Micro-Architecture Definition, IP/Subsystem/SoC Design, Low Power Design, expertise in various protocols including PCIE, USB, DDR, HDMI, and more.",
    icon: <Layers className="h-10 w-10 text-black" />
  },
  {
    title: "Chip Verification",
    content: "Comprehensive verification services including UVM methodology, test plan development, functional coverage, and low power verification.",
    icon: <Shield className="h-10 w-10 text-black" />
  },
  {
    title: "Integration Services",
    content: "Full language support for Verilog, SystemVerilog, VHDL with IP-XACT, UPF, SDC, LEF/DEF support and physically aware integration process.",
    icon: <Layout className="h-10 w-10 text-black" />
  },
  {
    title: "DFT and Testing",
    content: "Complete DFT architecture, methodology & flow including scan insertion, BIST, JTAG implementation, and test coverage analysis.",
    icon: <Wrench className="h-10 w-10 text-black" />
  },
  {
    title: "Automotive ISO 26262",
    content: "ASIL-B/ASIL-D Functional Safety Activities, consulting, and automotive-grade design and testing services.",
    icon: <Car className="h-10 w-10 text-black" />
  },
  {
    title: "Analog Circuits",
    content: "Design and implementation of CMOS Amplifiers, PLLs, SERDES blocks, and PMIC components with full verification procedures.",
    icon: <Zap className="h-10 w-10 text-black" />
  }
];

const serviceModels = [
  {
    title: "Time & Material Model",
    features: [
      "Flexibility: This model allows for adjustments in project scope and timelines based on evolving requirements.",
      "Transparency: Clients are billed based on actual time spent and materials used, ensuring clear visibility into project costs.",
      "Ideal for Uncertain Projects: Best suited for projects where requirements are not fully defined at the outset.",
      "Continuous Collaboration: Facilitates ongoing communication between the client and development team throughout the project lifecycle.",
      "Scalable Resources: Easily scale resources up or down according to project needs, ensuring optimal efficiency."
    ]
  },
  {
    title: "Offshore Development Centre (ODC) Model",
    features: [
      "Cost-Effective Solutions: Leverage skilled talent from regions with lower operational costs, reducing overall project expenses.",
      "Access to Global Talent: Tap into a diverse pool of skilled professionals, enhancing innovation and expertise.",
      "Focus on Core Business: Allows clients to concentrate on their core business while we handle the development processes.",
      "Enhanced Productivity: ODCs operate in different time zones, enabling round-the-clock development and faster project completion.",
      "Long-Term Partnership: Establishes a strategic partnership for ongoing projects, fostering deep understanding and collaboration."
    ]
  },
  {
    title: "Turnkey Model",
    features: [
      "Complete Solution: We manage the entire project lifecycle from conception to delivery, providing a comprehensive solution.",
      "Single Point of Contact: Clients benefit from streamlined communication with a single provider, simplifying project management.",
      "Risk Mitigation: Reduces risks associated with project execution, as we take full responsibility for delivering the final product.",
      "Fixed Budget and Timeline: Clients enjoy predictability with fixed costs and timelines, aiding in budget planning.",
      "Quality Assurance: Our team ensures quality standards are met throughout the project, resulting in a reliable end product."
    ]
  },
  {
    title: "Built-Operate-Transfer (BOT) Model",
    features: [
      "Phased Approach: Initially builds and operates the project before transferring ownership to the client, ensuring a smooth transition.",
      "Lower Initial Investment: Clients can benefit from reduced upfront costs while still receiving a fully operational solution.",
      "Knowledge Transfer: We provide training and support during the transfer phase, ensuring clients are equipped to manage the project independently.",
      "Long-Term Support: Ongoing operational support is available during the initial phase, helping clients adapt to the new system.",
      "Tailored Solutions: Custom-built solutions that align with client specifications and operational needs, ensuring maximum effectiveness."
    ]
  }
];

const domains = [
  {
    title: "Networking (Ethernet Packet Processing SoCs)",
    details: [
      "High Throughput: Our Ethernet packet processing SoCs are designed to handle large volumes of data traffic efficiently.",
      "Low Latency: Optimized for minimal delay, enabling real-time data transmission.",
      "Scalability: Easily scalable architecture to accommodate growing network demands.",
      "Robust Security Features: Integrated security protocols to protect data integrity.",
      "Versatile Applications: Suitable for data centers, enterprise networks, and telecommunications."
    ]
  },
  {
    title: "Data Centre (CxL/PCIe based SoCs)",
    details: [
      "High Performance: Our CxL/PCIe based SoCs deliver exceptional performance for data center applications, optimizing data flow and processing speed.",
      "Energy Efficiency: Designed with power-saving features to reduce energy consumption while maintaining peak performance.",
      "Compatibility: Seamless integration with existing data center infrastructure and support for multiple protocols.",
      "Enhanced Scalability: Supports dynamic scaling to meet the evolving demands of data-intensive applications.",
      "Reliability: Built for high availability and fault tolerance, ensuring continuous operation in critical environments."
    ]
  },
  {
    title: "HPC (Heterogeneous Computing)",
    details: [
      "Optimized Parallel Processing: Our HPC solutions leverage heterogeneous computing architectures to maximize performance across diverse workloads.",
      "Flexibility: Supports a variety of processing units, including CPUs, GPUs, and FPGAs, enabling tailored solutions for specific applications.",
      "High Bandwidth: Designed to handle large data sets efficiently, facilitating faster computations and reduced processing times.",
      "Advanced Algorithms: Incorporates cutting-edge algorithms to enhance computational efficiency and performance.",
      "Scalable Solutions: Easily scalable to accommodate growing computational demands in research, simulations, and big data analytics."
    ]
  },
  {
    title: "Automotive SoCs (ISO 26262)",
    details: [
      "Safety Compliance: Our automotive SoCs are designed in accordance with ISO 26262 standards, ensuring high safety and reliability for automotive applications.",
      "Real-Time Processing: Capable of real-time data processing for critical applications such as ADAS (Advanced Driver Assistance Systems).",
      "Robust Performance: Engineered to withstand harsh automotive environments, providing durability and longevity.",
      "Integration of Multiple Functions: Combines various functionalities into a single chip, reducing size and complexity in automotive systems.",
      "Future-Proof Technology: Designed to support emerging automotive technologies, including electric and autonomous vehicles."
    ]
  },
  {
    title: "5G (Open RAN Baseband SoCs)",
    details: [
      "High-Speed Connectivity: Our 5G baseband SoCs enable ultra-fast data transfer rates, enhancing user experiences in mobile communication.",
      "Open RAN Compatibility: Designed for interoperability within Open RAN ecosystems, promoting flexibility and innovation in network deployment.",
      "Low Latency: Optimized for minimal latency, critical for applications such as IoT, augmented reality, and smart cities.",
      "Scalable Architecture: Easily scalable to meet the demands of expanding 5G networks and diverse applications.",
      "Advanced Signal Processing: Incorporates sophisticated algorithms for efficient signal processing, ensuring reliable connections."
    ]
  },
  {
    title: "DSP and AI (AI Accelerators)",
    details: [
      "High Computational Power: Our AI accelerators are designed to handle complex algorithms and large datasets for advanced machine learning applications.",
      "Energy Efficiency: Optimized for low power consumption while delivering high performance, ideal for edge and mobile applications.",
      "Real-Time Processing: Capable of real-time data processing for applications such as image recognition, natural language processing, and predictive analytics.",
      "Versatile Integration: Easily integrates with existing systems and frameworks, enhancing overall functionality and performance.",
      "Future-Ready Solutions: Designed to evolve with emerging AI technologies, ensuring longevity and relevance in a rapidly changing landscape."
    ]
  },
  {
    title: "Edge Computing (RISC-V Based SoCs)",
    details: [
      "Customizability: Our RISC-V based SoCs offer highly customizable architectures tailored to specific edge computing applications.",
      "Low Latency: Designed for quick data processing at the edge, reducing latency and improving response times for critical applications.",
      "Energy Efficiency: Focused on power-efficient designs, making them ideal for battery-operated and resource-constrained environments.",
      "Scalable Solutions: Easily scalable to accommodate varying workloads and deployment scenarios in edge computing.",
      "Enhanced Security: Integrated security features to safeguard data and ensure secure processing at the edge."
    ]
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-beige">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Services
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-black mx-auto mb-6"></motion.div>
      </motion.div>

      {/* Service Cards Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-lightBeige border border-black/20 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.content}</p>
            </motion.div>
          ))}
          
          {/* Center aligned Analog Circuits card */}
          <motion.div
            variants={itemVariants}
            className="bg-lightBeige border border-black/20 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2"
          >
            <div className="text-blue-600 mb-4">{serviceCards[6].icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{serviceCards[6].title}</h3>
            <p className="text-gray-600">{serviceCards[6].content}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Models Section - 2x2 Grid */}
      <motion.section variants={itemVariants} className="mb-16">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
          Service Models
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-black mx-auto mb-6"></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceModels.map((model, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-lightBeige border border-black/20 rounded-lg shadow-lg p-6"
            >
              <h4 className="text-xl font-bold text-black mb-4">{model.title}</h4>
              <ul className="space-y-2">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Domains Section - 3x2 Grid + Center Card */}
      <motion.section variants={itemVariants}>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
          Domains
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-black mx-auto mb-6"></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.slice(0, 6).map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-lightBeige border border-black/20 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setExpandedDomain(expandedDomain === index ? null : index)}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-black mb-2">{domain.title}</h4>
                {expandedDomain === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </div>
              
              <AnimatePresence>
                {expandedDomain === index ? (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 mt-4"
                  >
                    {domain.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700">• {detail}</li>
                    ))}
                  </motion.ul>
                ) : (
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {domain.details[0]}
                  </p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Center card for the last domain */}
          {domains.length >= 7 && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-3 max-w-lg mx-auto bg-lightBeige border border-black/20 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setExpandedDomain(expandedDomain === 6 ? null : 6)}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-black mb-2">{domains[6].title}</h4>
                {expandedDomain === 6 ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </div>
              
              <AnimatePresence>
                {expandedDomain === 6 ? (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 mt-4"
                  >
                    {domains[6].details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700">• {detail}</li>
                    ))}
                  </motion.ul>
                ) : (
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {domains[6].details[0]}
                  </p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
