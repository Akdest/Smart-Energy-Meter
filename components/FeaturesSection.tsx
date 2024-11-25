import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="bg-gray-800 p-6 rounded-lg shadow-2xl transform-gpu"
  >
    <Icon className="h-12 w-12 text-green-400 mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={require("lucide-react").Zap}
          title="Real-Time Monitoring"
          description="Track energy usage with real-time analytics and cost-saving insights."
        />
        <FeatureCard
          icon={require("lucide-react").BarChart3}
          title="Cost Optimization"
          description="Identify patterns and reduce wasteful energy consumption."
        />
        <FeatureCard
          icon={require("lucide-react").Shield}
          title="Secure Data"
          description="Your data is securely stored in the cloud for reliable access."
        />
      </div>
    </div>
  </section>
);
