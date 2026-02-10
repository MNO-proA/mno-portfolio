"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SmartQal",
    description:
      "SmartQal is a SaaS platform that provides professional scheduling and booking solutions for service providers.",
    image: "/images/smartqal_thumbnail.png",
    tag: ["All", "App"],
    gitUrl: "https://smartqal.com/",
    previewUrl: "https://smartqal.com/",
  },
  {
    id: 2,
    title: "LMS - Rhema-Gold Consulting and Training Institute LLC, USA",
    description:
      "Custom Learning Managment System built and hosted on AWS Cloud",
    image: "/images/rhema.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.rhemagoldinst.com/",
    previewUrl: "https://www.rhemagoldinst.com/",
  },
  {
    id: 3,
    title: "SmartQal WhatsApp AI Agent",
    description:
      "An AI agent designed to handle booking reminders, QR-code receipt delivery, and customer support, improving user understanding and adoption of SmartQal.",
    image: "/images/whatsapp.png",
    tag: ["All", "AI"],
    gitUrl: "https://wa.me/233531424975",
    previewUrl: "https://wa.me/233531424975",
  },
  {
    id: 4,
    title: "Wholesale Order Management AI Agent",
    description:
      "A Simple AI-powered agent that receives bulk orders, immediate or future schedules, checks inventory availability, records sales orders, routes them to operations for processing, and update inventory once orders are processed by operators — with room to grow in complexity.",
    image: "/images/order-mgt.png",
    tag: ["All", "AI"],
    gitUrl:
      "https://docs.google.com/spreadsheets/d/13-BzxOnViY4nZgP9HHAMV0nQx0dQ-c0zbF6iRMsNudE/edit?usp=sharing",
    previewUrl:
      "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/fbf89f01-9043-4bb6-aa82-51ec5ccae506/chat",
  },

  {
    id: 5,
    title: "AI Agent For Data Analytics",
    description:
      "An AI-powered analytics agent that eliminates manual analysis using prompts to automatically generate insights, visualizations, and reports without requiring formulas or SQL.",
    image: "/images/ai_data_analytics.webp",
    tag: ["All", "AI"],
    gitUrl:
      "https://docs.google.com/spreadsheets/d/1H2ZWGuD6TEOLfTieGcpBWmbhwn1FQC5VGtAEDAxWESs/edit?usp=sharing",
    previewUrl:
      "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/2b7fc8a8-2670-4569-9d8f-cd469dcbf206/chat",
  },
  {
    id: 6,
    title: "Form Builder & Digital Submissions Platform",
    description:
      "A self-hosted digital forms and submissions platform designed to replace paper-based intake with structured, verifiable data capture. Enables public users to submit standardized forms online, receive automated acknowledgements, and supports internal verification through simple, familiar interfaces connected to a central data system — improving accuracy, traceability, and processing efficiency for permits, certificates, and compliance-related workflows.",
    image: "/images/opn-form-thumbnail.png",
    tag: ["All", "Web"],
    gitUrl: "https://nocodb-xsooo0g4csc4cgg8csgwcksw.smartqal.com",
    previewUrl: "https://nginx-vkoscc48884oow48c4k80kww.smartqal.com/home",
  },

  {
    id: 7,
    title: "Institutional Research AI Assistant",
    description:
      "AI-powered research assistant that organizes, analyzes, and provides citation-aware insights from institutional research documents, supporting literature review and knowledge synthesis.",
    image: "/images/research.png",
    tag: ["All", "AI"],
    gitUrl: "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/ff97c7df-91c3-4778-868b-876665e77aec/chat",
    previewUrl: "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/ff97c7df-91c3-4778-868b-876665e77aec/chat",
  },
    {
    id: 8,
    title: "Simple Inventory Scanner App",
    description:
      "QR codes in inventory management enable real-time tracking, enhanced accuracy, and increased efficiency by storing extensive product data (up to 4,296 characters) that can be scanned instantly with standard smartphones or tablets. If tailored for complexity, they replace manual data entry for,receiving, picking, and shipping, reducing errors and providing, visibility into, stock levels, across multiple locations.",
    image: "/images/inventory-scanner.jfif",
    tag: ["All", "App"],
    gitUrl: "https://inventory-scanner-flame.vercel.app",
    previewUrl: "https://inventory-scanner-flame.vercel.app",
  },
      {
    id: 9,
    title: "Stochastic Inventory Control & Demand Forecasting Engine (ERP Inventory Control Unit)",
    description:
      "Stochastic inventory control module based on the (s, Q) policy, combining EOQ optimization with probabilistic reorder point calculation under uncertain demand. Extending the module with machine learning–based demand forecasting to dynamically update EOQ, safety stock, and reorder points based on predicted demand distributions.",
    image: "/images/Leveraging-ERP-fo-EIM-01.webp",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/pulse/inventory-management-stochastic-demand-michael-nana-ofosu-venme/?trackingId=OAZs6AbQSE%2BXogbVd103kg%3D%3D",
    previewUrl: "https://www.linkedin.com/pulse/inventory-management-stochastic-demand-michael-nana-ofosu-venme/?trackingId=OAZs6AbQSE%2BXogbVd103kg%3D%3D",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
