import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";
import { Product } from "../components/Product";

import heroImg from "../assets/heroImg.jpg";
import sheet from "../assets/sheet.png"
import settings from "../assets/settings.png"
import Footer from "../components/ui/Footer";

const Home = () => {
    return (
        <>
            <header className="bg-green-light relative overflow-hidden">
                <Navbar />
                <div className="container py-16 md:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto md:h-[568px]">
                    <div>
                        <h1 className="text-center lg:text-left text-4xl md:text-6xl font-semibold text-green-primary lg:leading-normal">
                            Shop from the best instrument plug
                        </h1>
                        <p className="mt-4 text-center lg:text-left text-[#636363]">
                            It all Starts With A Click and You are One Step Ahead to Finding Your
                            Dream Speaker with quality
                        </p>

                        <div className="mt-8 flex gap-4 justify-center md:justify-start">
                            <Button variant="primary" className="lg:px-16">Sign In</Button>
                            <Button variant="secondary" className="lg:px-16">Sign up</Button>
                        </div>

                        <div className="flex justify-between text-center bg-white p-4 rounded-md w-auto lg:w-96 mt-8 shadow-lg">
                            <div>
                                <h1 className="font-bold text-2xl text-green-primary">2k</h1>
                                <p className="text-sm">Speaker Display</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl text-green-primary">1k</h1>
                                <p className="text-sm">Satisfied Customer</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl text-green-primary">15</h1>
                                <p className="text-sm">Pick up points</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <img
                            src={heroImg}
                            alt="hero image"
                            className="w-[720px] absolute top-0 right-0"
                        />
                    </div>
                </div>
            </header>
            <section className="bg-green-primary">
                <div className="container text-white flex justify-between py-8 flex-wrap">
                    <div>
                        <img src={sheet} alt="sheet" className="w-10 mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                    <div>
                        <img src={settings} alt="settings" className="w-10  mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={sheet} alt="sheet" className="w-10  mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={settings} alt="settings" className="w-10 mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={sheet} alt="sheet" className="w-10 mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={settings} alt="settings" className="w-10 mx-auto" />
                        <p className="font-bold text-lg">Water Resistance</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-12">
                    <div className="flex gap-3 justify-center">
                        <p className="font-bold underline text-green-primary text-xl">Special Offer</p>
                        <span>|</span>
                        <p className=" text-xl">All Product</p>
                    </div>

                    {/* product display */}
                    <div className="mt-16 flex flex-wrap justify-center lg:justify-between">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
