import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";

import logo from "../assets/logo.png";
import Cart from "../assets/cart.png";

const Navbar = () => {
    return (
        <nav className=" sticky pt-2 top-8 z-50">
            <div className="container bg-green-primary rounded-full h-16 flex px-8 justify-between items-center">
                <NavLink to="/">
                    <img src={logo} alt="SP Audio" className="w-14" />
                </NavLink>
                <div className="flex gap-8 items-center">
                    <div className="relative">
                        <Input
                            inputType="search"
                            placeholder="Search for Product"
                            className="pl-8 w-40 md:w-96"
                            variant="primary"
                        />
                        <svg
                            className="absolute left-3 top-1/2 w-4 -translate-y-1/2 fill-grey-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 13 14"
                            aria-hidden="true"
                            fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.82264 10.3833C7.89957 11.0841 6.74835 11.5 5.5 11.5C2.46243 11.5 0 9.03757 0 6C0 2.96243 2.46243 0.5 5.5 0.5C8.53757 0.5 11 2.96243 11 6C11 7.24835 10.5841 8.39957 9.8833 9.32264L12.7803 12.2197C13.0732 12.5126 13.0732 12.9874 12.7803 13.2803C12.4874 13.5732 12.0126 13.5732 11.7197 13.2803L8.82264 10.3833ZM9.5 6C9.5 8.20914 7.70914 10 5.5 10C3.29086 10 1.5 8.20914 1.5 6C1.5 3.79086 3.29086 2 5.5 2C7.70914 2 9.5 3.79086 9.5 6Z"
                                fill="#fff"
                            />
                        </svg>
                    </div>
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return ` hover:text-orange-base ${
                                isActive
                                    ? "text-orange-base border-b border-b-orange-base"
                                    : "text-white"
                            }`;
                        }}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) => {
                            return `text-white hover:text-orange-base ${
                                isActive && "text-orange-base border-b border-b-orange-base"
                            }`;
                        }}>
                        Shop
                    </NavLink>
                    <NavLink
                        to="/account"
                        className={({ isActive }) => {
                            return `text-white hover:text-orange-base ${
                                isActive && "text-orange-base border-b border-b-orange-base"
                            }`;
                        }}>
                        Account
                    </NavLink>
                    <NavLink to="/cart">
                        <img src={Cart} alt="shopping cart" className="w-8" />
                    </NavLink>
                    <Button variant="ghost">Contact Us</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
