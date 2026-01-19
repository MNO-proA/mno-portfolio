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
    tag: ["All", "Web"],
    gitUrl: "https://smartqal.com/",
    previewUrl: "https://smartqal.com/",
  },
  {
    id: 2,
    title: "LMS - Rhema-Gold Consulting and Training Institute LLC, USA",
    description: "Custom Learning Managment System built and hosted on AWS Cloud",
    image: "/images/rhema.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.rhemagoldinst.com/",
    previewUrl: "https://www.rhemagoldinst.com/",
  },
  {
    id: 3,
    title: "SmartQal WhatsApp AI Agent",
    description: "An AI agent designed to handle booking reminders, QR-code receipt delivery, and customer support, improving user understanding and adoption of SmartQal.",
    image: "/images/whatsapp.png",
    tag: ["All", "AI"],
    gitUrl: "https://wa.me/233531424975",
    previewUrl: "https://wa.me/233531424975",
  },
 {
  id: 4,
  title: "Wholesale Order Management AI Agent",
  description: "A Simple AI-powered agent that receives bulk orders, immediate or future schedules, checks inventory availability, records sales orders, routes them to operations for processing, and update inventory once orders are processed by operators — with room to grow in complexity.",
  image: "/images/order-mgt.png",
  tag: ["All", "AI"],
  gitUrl: "https://docs.google.com/spreadsheets/d/13-BzxOnViY4nZgP9HHAMV0nQx0dQ-c0zbF6iRMsNudE/edit?usp=sharing",
  previewUrl: "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/fbf89f01-9043-4bb6-aa82-51ec5ccae506/chat",
},

  {
    id: 5,
    title: "AI Agent For Data Analytics",
    description: "An AI-powered analytics agent that eliminates manual analysis using prompts to automatically generate insights, visualizations, and reports without requiring formulas or SQL.",
    image: "/images/ai_data_analytics.webp",
    tag: ["All", "AI"],
    gitUrl: "https://docs.google.com/spreadsheets/d/1H2ZWGuD6TEOLfTieGcpBWmbhwn1FQC5VGtAEDAxWESs/edit?usp=sharing",
    previewUrl: "https://n8n-yoggkkssskoscowkc8gck48g.smartqal.com/webhook/2b7fc8a8-2670-4569-9d8f-cd469dcbf206/chat",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
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
          isSelected={tag === "Mobile"}
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
