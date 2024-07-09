import React from "react";
import { cn } from "../../lib/cn";
import { cva } from "class-variance-authority";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    variant?: "primary" | "secondary"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputType, variant, placeholder, ...rest }, ref) => {
        return (
            <input
                {...rest}
                ref={ref}
                className={cn(inputVariant({ variant }), className)}
                placeholder={placeholder}
                type={inputType}
            />
        );
    }
);

const inputVariant = cva(
    "px-4 py-2 rounded-full border focus:outline-none text-sm placeholder:text-white border-white",
    {
        variants: {
            variant: {
                primary: "bg-transparent focus:border-white text-white",
                secondary: "bg-[#FFFEFB] text-gray-400 border-green-primary rounded-lg focus-visible:ring-offset-2 focus-visible:ring-grey-400 focus-visible:ring-2"
            },
        },
        defaultVariants:{
            variant: "primary"
        }
    }
);

export default Input;