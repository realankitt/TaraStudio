
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg group hover:-translate-y-1",
      className
    )}>
      <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
