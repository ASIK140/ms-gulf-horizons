import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Shield, Users, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use the highest quality materials and maintain strict quality control throughout every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our commitment to timelines ensures your project is completed on schedule, every time.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols and trained safety officers on every project site.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled workers, supervisors, and engineers with years of industry experience.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art tools and equipment for precision and efficiency in every task.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Focused",
    description: "We prioritize your satisfaction with clear communication and exceptional service.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-dark relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 bg-primary blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Excellence in Every Detail
          </h2>
          <div className="green-line mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            With our commitment to quality, precision, and on-time delivery, we have earned the trust
            of leading organizations across Saudi Arabia.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
