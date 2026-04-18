import './App.css';
import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_Rkdy4t0NYfM2Cu",
        key_secret: "DRInbfJS0fi89k1cuip5NcBh",
        amount: amount * 100,
        currency: "INR",
        name: "FABRIC CLOTHING",
        description: "Test Transaction",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Nihal",
          email: "nihal@gmail.com",
          contact: "8072476199"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="App">
      <h2>Razorpay Payment</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
