import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaCcMastercard, FaCcVisa, FaCcApplePay, FaCcAmex, FaShopify } from "react-icons/fa";


export const Footer = () => {
  return (
    <div key="1" className="bg-black text-white my-0">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Tienda</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Shopify Plus
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Punto de Venta Shopify
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Hardware Shopify
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Vender</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Comienza tu negocio
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Crea y vende tu marca
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Promociona tu negocio
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={250}
            src="/imgs/onlySlogo.png"
            width={250}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Soporte</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Soporte 24/7
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Comunidad Shopify
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Centro de Ayuda Shopify
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Acerca de</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Nuestra Historia
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Carreras
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white" href="#">
                Prensa y Medios
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <Link href="#">
              <FaCcMastercard className="h-10 w-10" />
            </Link>
            <Link href="#">
              <FaCcVisa className="h-10 w-10" />
            </Link>
            <Link href="#">
              <FaCcAmex className="h-10 w-10" />
            </Link>
            <Link href="#">
              <FaCcApplePay className="h-10 w-10" />
            </Link>
          </div>
          <form className="mt-4 md:mt-0 flex space-x-2">
            <Input className="w-64" placeholder="Correo electrónico" type="email" />
            <Button type="submit" className="bg-white text-black">Suscribirse</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 SupraTech MX, Todos los derechos reservados.</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Powered by: Shopify</div>
        </div>
      </div>
    </div>
  )
}