import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export interface SectionCollapseProps {
  open: boolean;
  panelKey: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Expand/collapse body with exit animation. Uses opacity + translate only
 * (no height) so timeline / absolute children are not clipped.
 */
const SectionCollapse: React.FC<SectionCollapseProps> = ({
  open,
  panelKey,
  children,
  className = "",
}) => (
  <AnimatePresence initial={false} mode="sync">
    {open ? (
      <motion.div
        key={panelKey}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.36,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    ) : null}
  </AnimatePresence>
);

export default SectionCollapse;
