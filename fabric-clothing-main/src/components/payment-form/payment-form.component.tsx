import axios from "axios";
import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";

// ✅ Utility to load Razorpay script dynamically
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const PaymentForm = () => {
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const cartTotal = useSelector(selectCartTotal);

  const paymentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // ✅ Ensure Razorpay script is loaded
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    if (cartTotal <= 0) {
      alert("Cart is empty!");
      return;
    }

    setPaymentInProgress(true);

    try {
      // 1. Create Razorpay order from backend
      const API_URL =
        process.env.NODE_ENV === "production"
          ? process.env.NODE_API_URL
          : "http://localhost:4000";

      const orderUrl = `${API_URL}/create-order`;

      const response = await axios.post(orderUrl, {
        amount: cartTotal,
        currency: "INR",
      });

      const { id, amount, currency } = response.data;

      // 2. Razorpay options
      const options = {
        key: "rzp_test_Rkdy4t0NYfM2Cu", // replace with your Razorpay test key
        amount,
        currency,
        name: "Fabric Clothing",
        description: "Payment for your order",
        order_id: id,
        handler: function (response: any) {
          alert("✅ Payment successful! ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Nihal",
          email: "nihal@gmail.com",
          contact: "8072476199",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // 3. Open Razorpay popup
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("❌ Payment failed. Check console for details.");
    } finally {
      setPaymentInProgress(false);
    }
  };

  return (
    <Button
      onClick={paymentHandler}
      isLoading={paymentInProgress}
      buttonType={BUTTON_TYPE_CLASSES.inverted}
    >
      PAY NOW
    </Button>
  );
};

export default PaymentForm;
