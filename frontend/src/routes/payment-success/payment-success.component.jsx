import { useState, setState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

const KEY = process.env.REACT_APP_STRIPE_PUB_KEY;

const stripe = await loadStripe(KEY);

const PaymentSuccess = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search);
    const sessionId = id.get('session_id');

    const fetchPaid = async () => {
        const response = await fetch('/api/stripe/order-success?session_id=' + sessionId);
        const sessions = await response.json();

        return await sessions.session.payment_status;
    }

    const paymentStatus = JSON.stringify(fetchPaid());
    
        
    
    return (
        <div>
            PaymentSuccess
            {paymentStatus}
        </div>
    )
}

export default PaymentSuccess;