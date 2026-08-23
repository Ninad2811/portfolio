import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'neon' | 'secondary';
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue';
  
  const variants = {
    default: 'bg-white/10 text-slate-100 hover:bg-white/20 border border-white/5',
    outline: 'text-slate-300 border border-slate-700 hover:border-slate-500',
    neon: 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30',
    secondary: 'bg-slate-800 text-slate-300 hover:bg-slate-700',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
