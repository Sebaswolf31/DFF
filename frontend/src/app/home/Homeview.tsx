import React from 'react';
import Image from 'next/image';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Homeview = () => {
  return (
    <div>
      {/* Sección principal de imagen */}
      <div className='relative w-full mx-auto max-w-5xl'>
        <div className='relative w-full aspect-[16/9]'>
          <Image
            src='/home.png'
            alt='Imagen principal'
            fill
            className='object-contain'
            sizes='(max-width: 768px) 100vw, 80vw'
          />
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pb-10 md:grid-cols-3 md:px-8'>
        {/* Tarjeta 1 - Precisión */}
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='relative w-full h-48 mb-4'>
            {' '}
            {/* Aumenté la altura a h-48 */}
            <Image
              src='/precision.png'
              alt='Precisión en Cada Puntada'
              fill
              className='object-contain' // Cambiado a contain para mejor visualización
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
          <h3 className='pb-2 text-lg font-bold text-center md:text-xl'>
            Precisión en Cada Puntada
          </h3>
          <p className='text-sm text-justify'>
            En DFYF, transformamos hilos en oportunidades. Con tecnología
            integrada en cada etapa de confección, eliminamos los cuellos de
            botella en la producción de prendas.
          </p>
        </div>

        {/* Tarjeta 2 - Simplificar */}
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='relative w-full h-48 mb-4'>
            <Image
              src='/simplificar.png'
              alt='Simplifica tu operación'
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
          <h3 className='pb-2 text-lg font-bold text-center md:text-xl'>
            Confección Sin Complejidades
          </h3>
          <p className='text-sm text-justify'>
            ¿Colecciones complejas? Nosotros las simplificamos. Centralizamos el
            diseño, patronaje y confección en un flujo único adaptado a tu
            marca.
          </p>
        </div>

        {/* Tarjeta 3 - Automatiza */}
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='relative w-full h-48 mb-4'>
            <Image
              src='/automatiza.png'
              alt='Automatiza para crecer'
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
          <h3 className='pb-2 text-lg font-bold text-center md:text-xl'>
            Automatización con Alma Artesanal
          </h3>
          <p className='text-sm text-justify'>
            Combinamos lo mejor de dos mundos: la agilidad de la automatización
            textil y el cuidado artesanal. Con nuestros sistemas inteligentes,
            producimos desde lotes pequeños hasta series masivas.
          </p>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className='flex flex-col items-center justify-center pb-4 mx-auto space-y-1 text-center md:space-y-2 lg:space-y-4'>
        <h2 className='text-xl font-bold md:text-3xl lg:text-4xl text-greenP'>
          En DFYF no solo confeccionamos prendas, construimos identidades
        </h2>
        <p className='text-base text-gray-600 md:text-lg lg:text-xl'>
          ¡Contáctanos y transforma tu forma de trabajar!
        </p>
        <a
          href='tel:+573022208870'
          className='flex items-center gap-2 text-blue-600 hover:text-blue-800'
        >
          <IoCallSharp className='text-greenP' />
          <span>+57 302 220 8870</span>
        </a>
        <a
          href='mailto:confeccionesdfyf@gmail.com'
          className='flex items-center gap-2 text-blue-600 hover:text-blue-800'
        >
          <MdEmail className='text-greenP' />
          <span>confeccionesdfyf@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Homeview;
