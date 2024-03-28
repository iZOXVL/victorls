"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreditCardStore } from '@/store/payment/payment-store'; // Make sure the path matches your file structure

// Define the type for form inputs
type CreditCardFormInputs = {
    cardHolderName: string;
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
};

export const CreditCardForm = () => {
    const { register, handleSubmit, formState: { isValid } } = useForm<CreditCardFormInputs>({
        mode: 'onChange', // Validates form on each input change
    });

    const setCreditCard = useCreditCardStore((state) => state.setCreditCard);

    const onSubmit = (data: CreditCardFormInputs) => {
        setCreditCard(data);
        // Additional actions after setting the credit card information, like navigation or showing a success message
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
                <label htmlFor="cardHolderName">Card Holder's Name</label>
                <input
                    id="cardHolderName"
                    type="text"
                    {...register('cardHolderName', { required: 'Card holder name is required' })}
                    className="p-2 border rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    id="cardNumber"
                    type="text"
                    {...register('cardNumber', { required: 'Card number is required' })}
                    className="p-2 border rounded-md"
                />
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <label htmlFor="expiryMonth">Expiry Month</label>
                    <input
                        id="expiryMonth"
                        type="text"
                        {...register('expiryMonth', { required: 'Expiry month is required' })}
                        className="p-2 border rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="expiryYear">Expiry Year</label>
                    <input
                        id="expiryYear"
                        type="text"
                        {...register('expiryYear', { required: 'Expiry year is required' })}
                        className="p-2 border rounded-md"
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="cvv">CVV</label>
                <input
                    id="cvv"
                    type="text"
                    {...register('cvv', { required: 'CVV is required' })}
                    className="p-2 border rounded-md"
                />
            </div>

            <button
                type="submit"
                disabled={!isValid}
                className={`mt-4 p-2 text-white ${isValid ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
                Save Card Details
            </button>
        </form>
    );
};
