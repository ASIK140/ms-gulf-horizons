import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";

const clients = [
  "Buna Al Khaleej Contracting Company",
  "Golden Polygon Contracting",
  "Kenz Saudi Commercial Co. Ltd",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 section-dark border-y border-border" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm uppercase tracking-wider">
            Trusted by Leading Organizations
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 p-6 rounded-xl bg-charcoal-medium/50 border border-border"
            >
              <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium text-center">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
