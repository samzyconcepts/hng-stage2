import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary"| "tertiary" | "ghost";
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button = ({ className, type, variant, ...rest }: ButtonProps) => {
    return <button {...rest} className={cn(buttonVariants({ variant }), className)} type={type} />;
};

const buttonVariants = cva(
    "py-2 px-4 rounded-md cursor-pointer no-underline text-xs transition-all",
    {
        variants: {
            variant: {
                primary:
                    "bg-green-primary hover:bg-green-900 text-white  text-sm",
                secondary:
                    "border border-green-primary bg-transparent hover:bg-gray-50 text-green-primary text-sm ",
                    tertiary:
                    "bg-orange-base hover:bg-orange-900 text-white  text-sm",
                ghost: "rounded-full border-none bg-white hover:bg-green-light text-sm text-orange-base"
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export default Button;