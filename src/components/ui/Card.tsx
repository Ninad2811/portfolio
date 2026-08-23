import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'neon';
}

export function Card({
  className,
  variant = 'glass',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const variants = {
    default: 'bg-slate-900 border border-slate-800',
    glass: 'glass-card',
    neon: 'bg-slate-900 border border-slate-800 hover:border-neon-blue/50 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300',
  };

  return (
    <motion.div 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
