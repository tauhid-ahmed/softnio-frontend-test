import { motion, AnimatePresence } from "motion/react";

const variants = {
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0.5,
  },
};

export function ProductImage({ image }: { image: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        key={image}
        className="rounded overflow-hidden py-6 md:py-0"
      >
        <img
          className="block h-60 md:h-full w-full object-cover mx-auto xw-full"
          src={image}
          alt={`Product Image`}
        />
      </motion.div>
    </AnimatePresence>
  );
}
