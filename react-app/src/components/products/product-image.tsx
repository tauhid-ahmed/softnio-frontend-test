import { motion, AnimatePresence } from "motion/react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function ProductImage({ image }: { image: string }) {
  return (
    <motion.div className="rounded overflow-hidden py-6 md:py-0">
      <AnimatePresence mode="wait">
        <motion.img
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          key={image}
          className="block h-60 md:h-full w-full object-cover mx-auto"
          src={image}
          alt={`Product Image`}
        />
      </AnimatePresence>
    </motion.div>
  );
}
