import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export const Loader = ({ size = "md", text, className }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-t-primary border-r-transparent border-b-primary/20 border-l-transparent animate-spin" />
        
        {/* Inner loader */}
        <Loader2 className={cn(
          "animate-spin text-primary/80",
          sizeClasses[size]
        )} />
      </div>
      {text && (
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium text-muted-foreground">
            {text}
          </p>
          <div className="h-1 w-24 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-primary rounded-full animate-[shimmer_1s_ease-in-out_infinite]" />
          </div>
        </div>
      )}
    </div>
  );
};