import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceDrywall from "@/assets/service-drywall.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import servicePlastering from "@/assets/service-plastering.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";

const services = [
  {
    title: "Ceiling Installation",
    description: "Professional suspended and acoustic ceiling systems for commercial and residential projects.",
    image: serviceCeiling,
    path: "/services/ceiling-installation",
  },
  {
    title: "Drywall Partition",
    description: "Expert gypsum board and metal stud partition wall construction for flexible spaces.",
    image: serviceDrywall,
    path: "/services/drywall-partition",
  },
  {
    title: "Painting & Decoration",
    description: "Premium interior and exterior painting with decorative finishes and coatings.",
    image: servicePainting,
    path: "/services/painting-decoration",
  },
  {
    title: "Tile Installation",
    description: "Precision tile cutting and fixing for floors, walls, and decorative applications.",
    image: serviceTile,
    path: "/services/tile-installation",
  },
  {
    title: "Cement Plastering",
    description: "Smooth and durable cement plastering for interior and exterior surfaces.",
    image: servicePlastering,
    path: "/services/cement-plastering",
  },
  {
    title: "Epoxy & Waterproofing",
    description: "Industrial-grade epoxy flooring and comprehensive waterproofing solutions.",
    image: serviceEpoxy,
    path: "/services/epoxy-waterproofing",
  },
  {
    title: "Complete Finishing Works",
    description: "Turnkey interior finishing packages from concept to completion.",
    image: serviceFinishing,
    path: "/services/finishing-works",
  },
];

const ServicesSection = () => {
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
          <span className="inline-block text-primary font-semibold mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Comprehensive Finishing Solutions
          </h2>
          <div className="green-line mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            We offer a complete range of interior finishing services with the highest standards
            of quality and craftsmanship.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.path} className="service-card block h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
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
          <Link to="/services" className="btn-hero-outline">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
