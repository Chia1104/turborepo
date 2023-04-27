"use client";

import React, { type FC, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Page: FC<Props> = (props) => {
  const { children } = props;
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, type: "spring" }}>
      {children}
    </motion.main>
  );
};

export default Page;
