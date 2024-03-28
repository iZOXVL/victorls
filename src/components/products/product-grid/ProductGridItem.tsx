'use client';


import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { Card, CardFooter, Image, CardHeader, Button } from "@nextui-org/react";

interface Props {
  product: Product;
}


export const ProductGridItem = ({ product }: Props) => {

  const [displayImage, setDisplayImage] = useState(product.images[0]);


  return (
    <div className=" fade-in">
      <Card isFooterBlurred className="w-full h-[500px] col-span-12 sm:col-span-7 shadowItem">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-white font-medium text-xl">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          className="z-0 w-full h-full object-cover"
          src={displayImage}
          alt={product.title}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-md w-10 h-11 bg-black"
              src="/imgs/littleLogo.png"
            />
            <div className="flex flex-col">
              <h3 className="text-white">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</h3>
            </div>
          </div>
          <Link
            className="hover:text-blue-600  text-white"
            href={`/product/${product.slug}`}>
            <Button radius="md" size="md" className='bg-white text-slate-950'>Comprar</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

