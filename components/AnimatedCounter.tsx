'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AnimatedCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    return Math.round(latest);
  });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        delay
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group cursor-pointer"
    >
      <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary/5 border-0 hover:shadow-primary/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="pb-1 md:pb-2 relative z-10">
          <motion.div className="text-sm md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">
            {value.includes('+') ? (
              <span>
                <motion.span>{rounded}</motion.span>+
              </span>
            ) : (
              <motion.span>{rounded}</motion.span>
            )}
          </motion.div>
        </CardHeader>
        <CardContent className="pt-0 relative z-10">
          <p className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-primary/80 transition-colors duration-300">
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}