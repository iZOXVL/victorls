import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  creditCard: {
    cardHolderName: string;
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
  };

  // Methods
  setCreditCard: (creditCard: State["creditCard"]) => void;
}

export const useCreditCardStore = create<State>()(
  persist(
    (set, get) => ({
      creditCard: {
        cardHolderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
      },

      setCreditCard: (creditCard) => {
        set({ creditCard });
      },
    }),
    {
      name: "credit-card-storage",
    }
  )
);
