import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  "High-quality finishing solutions",
  "Experienced workforce",
  "On-time project delivery",
  "Premium craftsmanship",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-dark" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="MS Gulf Horizons Contracting team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-lg">
              <p className="text-4xl font-montserrat font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
              Specialist Finishing Works Contractor
            </h2>
            <div className="green-line mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              MS Gulf Horizons Contracting is a specialist finishing works contractor based
              in Jeddah, Saudi Arabia. We deliver high-quality interior contracting solutions
              including ceilings, drywall partitions, painting, tile installation, cement
              plastering, epoxy flooring, waterproofing, and complete finishing packages.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a commitment to craftsmanship and excellence, we have successfully completed
              prestigious projects across the Kingdom, earning the trust of leading organizations.
            </p>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
