import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "rick and morty app" },
    { name: "description", content: "Welcome to rick and morty app!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Rick & Morty Locations Explorer
      </motion.h1>
      
      <motion.p
        className="text-lg md:text-xl text-gray-400 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Discover and explore all locations across multiple dimensions in the Rick & Morty universe. Filter by type, dimension, and view resident details.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/locations"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg"
        >
          Explore Locations
        </Link>
      </motion.div>
    </div>
  );
}
