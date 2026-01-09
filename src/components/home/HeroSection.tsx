import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site interior finishing work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Green Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-primary" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Premier Finishing Contractor in Saudi Arabia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-foreground leading-tight mb-6"
          >
            We Are Customer Oriented &{" "}
            <span className="text-gradient">Praised for Excellent Commitment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Delivering high-quality interior contracting solutions including ceilings,
            drywall partitions, painting, tile installation, cement plastering, epoxy
            flooring, waterproofing, and complete finishing packages across Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-hero-primary">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/projects" className="btn-hero-outline">
              <Play className="w-5 h-5" />
              View Our Projects
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border/30"
          >
            <div>
              <p className="stat-number">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="stat-number">50+</p>
              <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="stat-number">100%</p>
              <p className="text-muted-foreground text-sm mt-1">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
