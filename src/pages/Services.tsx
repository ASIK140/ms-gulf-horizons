import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceDrywall from "@/assets/service-drywall.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import servicePlastering from "@/assets/service-plastering.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const services = [
  {
    title: "Ceiling Installation",
    description: "Professional suspended and acoustic ceiling systems for commercial and residential projects. We specialize in gypsum board ceilings, metal grid systems, and decorative ceiling solutions.",
    image: serviceCeiling,
    path: "/services/ceiling-installation",
    features: ["Suspended ceilings", "Acoustic panels", "Metal grid systems", "Custom designs"],
  },
  {
    title: "Drywall Partition",
    description: "Expert gypsum board and metal stud partition wall construction for flexible spaces. Create functional room divisions with superior sound insulation and fire resistance.",
    image: serviceDrywall,
    path: "/services/drywall-partition",
    features: ["Metal stud framing", "Gypsum board installation", "Sound insulation", "Fire-rated walls"],
  },
  {
    title: "Painting & Decoration",
    description: "Premium interior and exterior painting with decorative finishes and coatings. Our skilled painters deliver flawless results using high-quality materials.",
    image: servicePainting,
    path: "/services/painting-decoration",
    features: ["Interior painting", "Exterior coating", "Decorative finishes", "Protective coatings"],
  },
  {
    title: "Tile Installation",
    description: "Precision tile cutting and fixing for floors, walls, and decorative applications. From ceramic to porcelain and natural stone installations.",
    image: serviceTile,
    path: "/services/tile-installation",
    features: ["Floor tiling", "Wall tiling", "Natural stone", "Mosaic work"],
  },
  {
    title: "Cement Plastering",
    description: "Smooth and durable cement plastering for interior and exterior surfaces. We ensure even, crack-free finishes that stand the test of time.",
    image: servicePlastering,
    path: "/services/cement-plastering",
    features: ["Wall plastering", "Ceiling plastering", "External rendering", "Finishing coats"],
  },
  {
    title: "Epoxy & Waterproofing",
    description: "Industrial-grade epoxy flooring and comprehensive waterproofing solutions. Protect your structures with our advanced coating systems.",
    image: serviceEpoxy,
    path: "/services/epoxy-waterproofing",
    features: ["Epoxy flooring", "Waterproofing membranes", "Protective coatings", "Chemical resistance"],
  },
  {
    title: "Complete Finishing Works",
    description: "Turnkey interior finishing packages from concept to completion. We coordinate all finishing trades for a seamless delivery.",
    image: serviceFinishing,
    path: "/services/finishing-works",
    features: ["Full interior fit-out", "Project coordination", "Quality assurance", "Turnkey solutions"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroConstruction}
            alt="Our Services"
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
            <span className="inline-block text-primary font-semibold mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Comprehensive Finishing Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              From ceiling installations to complete interior finishing, we deliver exceptional
              quality across all our contracting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <div className="green-line mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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

export default Services;
