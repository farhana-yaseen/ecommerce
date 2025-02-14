'use client'
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Checkout({ amount }: { amount: number }) {
    const [errors, setErrors] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [paymentMenu, setPaymentMenu] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { data: session} = useSession();

    // Always call hooks in the same order
    useEffect(() => {
        if (amount > 0) {
            const getPaymentIntent = async () => {
                const response = await fetch("/api/payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ amount: amount })
                })
                const json = await response.json();
                setClientSecret(json.client_secret);
            }

            getPaymentIntent();
        }
    }, [amount]); // This effect runs only when `amount` changes

    if (!session) {
        return (
            <div onClick={() => alert("Please login to proceed with checkout.")} className="w-[358px] h-[54px] md:w-[457px] md:h-[60px] rounded-[62px] px-[54px] py-4 gap-3 bg-black flex items-center justify-center cursor-pointer mt-4">
                {/* Text Go to CheckOut */}
                <h1 className="w-[100px] h-[19px] md:w-[120px] md:h-[22px] font-figtree font-medium text-sm md:text-base leading-[18.9px] md:leading-[21.6px] text-white">Go to Checkout</h1>
                {/* Arrow Sign */}
                <div className="w-5 h-5 md:w-6 md:h-6">
                    <Image src={"/cart/arrow.png"} alt="arrow" width={15.76} height={18.75} className="w-[13.13px] h-[15.63px] top-[16.56px] left-[2.19px] md:w-full md:h-full md:top-[19.88px] md:left-[2.36px] object-cover"></Image>
                </div>
            </div>
        );
    }

    const handleFormSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        if (!stripe || !elements || !clientSecret) {
            setErrors("Stripe or Elements not loaded properly");
            return;
        }

        const { error } = await stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`
            }
        })

        if (error) {
            setErrors(error.message || "An unknown error occurred");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* This part is conditional, but hooks are already initialized */}
            {!paymentMenu ? (
                <div onClick={() => setPaymentMenu(true)} className="w-[358px] h-[54px] md:w-[457px] md:h-[60px] rounded-[62px] px-[54px] py-4 gap-3 bg-black flex items-center justify-center cursor-pointer mt-4">
                    {/* Text Go to CheckOut */}
                    <h1 className="w-[100px] h-[19px] md:w-[120px] md:h-[22px] font-figtree font-medium text-sm md:text-base leading-[18.9px] md:leading-[21.6px] text-white">Go to Checkout</h1>
                    {/* Arrow Sign */}
                    <div className="w-5 h-5 md:w-6 md:h-6">
                        <Image src={"/cart/arrow.png"} alt="arrow" width={15.76} height={18.75} className="w-[13.13px] h-[15.63px] top-[16.56px] left-[2.19px] md:w-full md:h-full md:top-[19.88px] md:left-[2.36px] object-cover"></Image>
                    </div>
                </div>
            ) : (
                clientSecret && <PaymentElement />
            )}

            {errors && <p className="text-red-500 font-semibold mt-2">{errors}</p>}
        </form>
    );
}
