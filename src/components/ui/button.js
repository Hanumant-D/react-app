import { tv } from "tailwind-variants"

export const button = tv({
  base: "px-4 py-2 rounded font-medium transition",
  variants: {
    variant: {
      primary: "bg-red-600 text-white hover:bg-red-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
    },
    size: {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})
