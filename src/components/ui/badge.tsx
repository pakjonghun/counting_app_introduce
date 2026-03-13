import { type HTMLAttributes } from "react"
import { cn } from "../../lib/utils"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "glow"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        variant === "default" && "bg-primary/10 text-primary",
        variant === "outline" && "border border-primary/25 text-primary",
        variant === "glow" &&
          "bg-accent/10 text-accent border border-accent/20 shadow-sm shadow-accent/10",
        className
      )}
      {...props}
    />
  )
}
