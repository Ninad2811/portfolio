import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'left',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-3", align === 'center' ? "items-center text-center" : "items-start text-left", className)} {...props}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-neon-blue/10 px-3 py-1 text-sm font-medium text-neon-blue border border-neon-blue/20">
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="max-w-2xl text-lg text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
