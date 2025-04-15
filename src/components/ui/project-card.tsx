
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  className?: string;
}

export function ProjectCard({ 
  title, 
  category, 
  description, 
  imageUrl,
  projectUrl,
  className 
}: ProjectCardProps) {
  return (
    <div className={cn(
      "group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl",
      className
    )}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <p className="text-sm font-medium text-primary bg-white/90 rounded-full px-3 py-1 inline-block mb-2">{category}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Link to={projectUrl}>
          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
