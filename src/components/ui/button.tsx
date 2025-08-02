import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-accent text-primary-foreground neon-glow hover:shadow-neon",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-[0_0_20px_hsl(var(--destructive)/0.5)]",
        outline: "glass-card border-2 border-primary/30 text-foreground hover:border-primary hover:neon-glow",
        secondary: "glass text-secondary-foreground hover:bg-white/10",
        ghost: "hover:glass hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline hover:text-primary",
        neon: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground neon-border",
        cyber: "bg-gradient-to-r from-success to-cyan-400 text-success-foreground hover:shadow-[0_0_30px_hsl(var(--success)/0.5)]",
        plasma: "animated-gradient text-white hover:scale-110",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
