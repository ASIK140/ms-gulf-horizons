import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";

import projectHaram from "@/assets/project-haram.jpg";
import projectMedical from "@/assets/project-medical.jpg";
import projectPowerplant from "@/assets/project-powerplant.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectMosque from "@/assets/project-mosque.jpg";
import projectUniversity from "@/assets/project-university.jpg";

const projects = [
  {
    title: "Third Saudi Expansion of Holy Haram",
    location: "Makkah",
    image: projectHaram,
    category: "Religious",
  },
  {
    title: "Jeddah Park Medical Tower S12",
    location: "Jeddah",
    image: projectMedical,
    category: "Healthcare",
  },
  {
    title: "Shuqaiq Power Plant",
    location: "Jizan",
    image: projectPowerplant,
    category: "Industrial",
  },
  {
    title: "Dar Al Jewar Residential Community",
    location: "Madina",
    image: projectResidential,
    category: "Residential",
  },
  {
    title: "Masjid Ahmad Muhammad Al Wahab",
    location: "Jeddah",
    image: projectMosque,
    category: "Religious",
  },
  {
    title: "Princess Nora University",
    location: "Riyadh",
    image: projectUniversity,
    category: "Educational",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-darker" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="green-line mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            We are proud to have contributed to some of the most prestigious projects
            across the Kingdom of Saudi Arabia.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn-hero-outline">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
