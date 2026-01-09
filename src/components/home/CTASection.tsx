import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-primary" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient">Next Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to bring
            your vision to life with precision and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero-primary">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+966550711473" className="btn-hero-outline">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
