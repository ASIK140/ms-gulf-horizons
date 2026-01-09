import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

import projectHaram from "@/assets/project-haram.jpg";
import projectMedical from "@/assets/project-medical.jpg";
import projectPowerplant from "@/assets/project-powerplant.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectMosque from "@/assets/project-mosque.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const projects = [
  {
    title: "Third Saudi Expansion of Holy Haram",
    location: "Makkah",
    description: "A prestigious project contributing to the expansion of Islam's holiest site. Our team delivered high-quality finishing works including ceiling installations, decorative elements, and flooring systems.",
    image: projectHaram,
    category: "Religious",
    scope: ["Ceiling Installation", "Flooring", "Decorative Finishing"],
  },
  {
    title: "Jeddah Park Medical Tower S12",
    location: "Jeddah",
    description: "A modern healthcare facility requiring precision finishing for medical environments. We provided complete interior finishing including hygienic wall systems and specialized flooring.",
    image: projectMedical,
    category: "Healthcare",
    scope: ["Wall Systems", "Ceiling Panels", "Epoxy Flooring"],
  },
  {
    title: "Shuqaiq Power Plant",
    location: "Jizan",
    description: "Industrial-grade finishing works for a major power generation facility. Our team installed durable flooring systems and protective coatings designed for industrial environments.",
    image: projectPowerplant,
    category: "Industrial",
    scope: ["Industrial Flooring", "Protective Coatings", "Structural Finishing"],
  },
  {
    title: "Dar Al Jewar Residential Community",
    location: "Madina",
    description: "A large-scale residential development featuring premium interior finishing across multiple units. We delivered consistent quality across all apartments and common areas.",
    image: projectResidential,
    category: "Residential",
    scope: ["Painting", "Tiling", "Ceiling Installation"],
  },
  {
    title: "Masjid Ahmad Muhammad Al Wahab",
    location: "Jeddah",
    description: "A beautiful mosque featuring intricate ceiling work and decorative finishes. Our craftsmen delivered detailed finishing work respecting the sacred nature of the space.",
    image: projectMosque,
    category: "Religious",
    scope: ["Decorative Ceilings", "Wall Finishing", "Painting"],
  },
  {
    title: "Princess Nora University",
    location: "Riyadh",
    description: "Educational institution finishing works covering classrooms, laboratories, and common areas. We provided durable and aesthetic solutions suitable for academic environments.",
    image: projectUniversity,
    category: "Educational",
    scope: ["Drywall Partitions", "Ceiling Systems", "Complete Finishing"],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroConstruction}
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary font-semibold mb-4">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Completed Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              We are proud to have contributed to some of the most prestigious projects across
              the Kingdom of Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Scope of Work:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.scope.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-charcoal-medium text-muted-foreground text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Projects;
