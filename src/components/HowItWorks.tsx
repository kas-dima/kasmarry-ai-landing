import { motion } from "framer-motion";
import { Camera, Palette, Clock, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Send Your Selfies",
    description: "Upload 10-15 photos of yourself. Natural lighting works best!",
    step: "01",
  },
  {
    icon: Palette,
    title: "Choose Your Style",
    description: "Pick from 100+ professional styles — business, fashion, fantasy, and more.",
    step: "02",
  },
  {
    icon: Clock,
    title: "Get Results in 24h",
    description: "Receive your stunning AI-generated portraits ready to share.",
    step: "03",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to your professional AI photoshoot.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-primary/50 to-transparent" />
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                </div>
              )}

              <div className="glass-card rounded-2xl p-8 h-full group-hover:border-primary/30 transition-all duration-300">
                {/* Step number */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-muted/30 select-none">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
