import Button from "./ui/Button";
import Speaker from "../assets/speaker.png";
import star from "../assets/stars.png";

export const Product = () => {
    return (
        <div className="shadow-lg px-8 py-4 w-96 rounded-lg">
            <img src={Speaker} alt="Speaker image" className="w-full" />
            <h2 className="text-green-primary font-bold text-lg text-center">Sp135</h2>
            <p className="text-green-primary font-bold text-lg text-center">N1,000,000</p>
            <span className="block text-sm text-center">
                15 Inch / 4800watt / Pure Acostic / 100 coil /Double magnet
            </span>
            <img src={star} alt="star" className="w-24 mx-auto my-4" />
            <div className="flex gap-2">
                <Button variant="primary" className="rounded-none">
                    Purchase
                </Button>
                <Button variant="tertiary" className="rounded-none">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};
