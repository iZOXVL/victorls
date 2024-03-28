import { Title } from "@/components";
import { CreditCardForm } from "@/app/(shop)/checkout/payment/ui/PaymentForm";

import { auth } from '@/auth.config';

export default async function AddressPage() {


    const session = await auth();

    if (!session?.user) {
        return (
            <h3 className="text-5xl">500 -  No hay sesión de usuario</h3>
        )
    }



    return (
        <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
            <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
                <Title title="Detalles de pago" subtitle="Ingresa la información de la tarjeta con la que realizarás el pago" />

                <CreditCardForm />
            </div>
        </div>
    );
}
