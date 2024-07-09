import Navbar from "../components/Navbar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import Speaker from "../assets/speaker.png";
import Tag from "../assets/purchase_tag.png";
import cart from "../assets/carttrolley.png";

function Checkout() {
    return (
        <>
            <Navbar />
            <div className="container mt-14">
                <h1 className="bg-green-primary font-bold text-white text-2xl text-center w-fit p-2 mx-auto">
                    Checkout
                </h1>

                <h3 className="font-semibold text-lg text-green-primary">Customer details</h3>
                <section className="flex gap-8 mt-4">
                    <form>
                        <div className="flex gap-4">
                            <div>
                                <Input variant="secondary" inputType="text" />
                                <label className="block text-base">First Name</label>
                            </div>
                            <div>
                                <Input variant="secondary" inputType="text" />
                                <label className="block text-base">Middle Name</label>
                            </div>
                            <div>
                                <Input variant="secondary" inputType="text" />
                                <label className="block text-base">Last Name</label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <div className=" w-full">
                                <Input
                                    variant="secondary"
                                    inputType="text"
                                    className="block w-full"
                                />
                                <label className="block text-base">Phone no.</label>
                            </div>
                            <div className=" w-full">
                                <Input
                                    variant="secondary"
                                    inputType="text"
                                    className="block w-full"
                                />
                                <label className="block text-base">Email</label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Input
                                variant="secondary"
                                inputType="text"
                                placeholder="Please Select"
                            />
                            <label className="block text-base">Preferred Location</label>
                        </div>
                        <div className="mt-4">
                            <Input variant="secondary" inputType="checkbox" />
                            <label>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                a
                            </label>
                        </div>
                    </form>

                    <div className="p-6 bg-[#CCE7D0] flex flex-col gap-5">
                        <div className="flex gap-4">
                            <img src={Speaker} alt="speaker" className="h-28" />
                            <div className="self-end">
                                <h3 className="text-lg">sp134</h3>
                                <p className="font-bold text-xl">N1,000,000</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src={Speaker} alt="speaker" className="h-28" />
                            <div className="self-end">
                                <h3 className="text-lg">sp134</h3>
                                <p className="font-bold text-xl">N1,000,000</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src={Speaker} alt="speaker" className="h-28" />
                            <div className="self-end">
                                <h3 className="text-lg">sp134</h3>
                                <p className="font-bold text-xl">N1,000,000</p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="mt-11 bg-green-primary h-1" />

                <section className="mt-5 flex justify-between">
                    <h1 className="font-bold text-xl">Total</h1>
                    <div>
                        <h3 className="text-green-primary font-bold text-right text-xl">
                            N1,100,000.00
                        </h3>
                        <p className="text-base text-[#898989]">Home delivery charges included</p>
                    </div>
                </section>

                <div className="my-14 flex justify-between">
                    <Button className="rounded-none px-24 py-5 flex gap-2 items-center">
                        <img src={Tag} alt="" className="w-4" /> Purchase
                    </Button>
                    <Button
                        variant="tertiary"
                        className="rounded-none px-24 py-5 flex gap-2 items-center">
                        <img src={cart} alt="" className="w-4" /> Back to cart
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Checkout;
