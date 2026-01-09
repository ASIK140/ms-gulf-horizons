import { motion } from "framer-motion";
import { Wrench, HardHat, Paintbrush, Hammer, Zap, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import toolsImage from "@/assets/tools-image.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const equipmentCategories = [
  {
    icon: HardHat,
    title: "Scaffolding Systems",
    description: "Complete scaffolding solutions for safe access to elevated work areas.",
    items: ["Frame scaffolding", "Modular systems", "Mobile towers", "Safety accessories"],
  },
  {
    icon: Wrench,
    title: "Drywall Installation Tools",
    description: "Professional-grade tools for precision drywall work.",
    items: ["T-squares and levels", "Screw guns", "Drywall lifts", "Cutting tools"],
  },
  {
    icon: Hammer,
    title: "Plastering & Finishing Tools",
    description: "Quality plastering equipment for smooth, professional finishes.",
    items: ["Trowels and floats", "Mixing equipment", "Spray machines", "Finishing tools"],
  },
  {
    icon: Paintbrush,
    title: "Tile Cutting & Fixing Equipment",
    description: "Precision tile installation equipment for perfect results.",
    items: ["Wet tile saws", "Manual cutters", "Leveling systems", "Grouting tools"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating Tools",
    description: "Professional painting equipment for flawless finishes.",
    items: ["Spray systems", "Rollers and brushes", "Sanders", "Masking equipment"],
  },
  {
    icon: Shield,
    title: "Epoxy & Waterproofing Machinery",
    description: "Specialized equipment for coating and waterproofing applications.",
    items: ["Floor grinders", "Shot blasters", "Application systems", "Curing equipment"],
  },
  {
    icon: Zap,
    title: "Power Tools & Electrical Equipment",
    description: "High-performance power tools for efficient construction work.",
    items: ["Drills and drivers", "Saws and cutters", "Generators", "Testing equipment"],
  },
];

const Equipment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroConstruction}
            alt="Tools and Equipment"
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
            <span className="inline-block text-primary font-semibold mb-4">Our Equipment</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Tools & Equipment
            </h1>
            <p className="text-xl text-muted-foreground">
              We use professional-grade tools and equipment to ensure precision, efficiency,
              and quality in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={toolsImage}
                  alt="Professional construction equipment"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Professional Grade Equipment
              </h2>
              <div className="green-line mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At MS Gulf Horizons, we invest in the best tools and equipment available. Our
                comprehensive inventory ensures we can handle any finishing project with
                precision and efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All our equipment is regularly maintained and operated by trained professionals,
                ensuring safety and optimal performance on every job site.
              </p>
            </motion.div>
          </div>

          {/* Equipment Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glow p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 section-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Safety First Approach
            </h2>
            <div className="green-line mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              All our equipment is regularly inspected and maintained to meet safety standards.
              Our operators are trained in proper equipment use and safety protocols, ensuring
              a safe working environment on every project site.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Equipment;
