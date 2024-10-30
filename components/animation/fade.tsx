import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const FadeAnim = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
