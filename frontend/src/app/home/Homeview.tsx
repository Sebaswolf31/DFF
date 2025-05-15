import React from 'react';
import Image from 'next/image';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Homeview = () => {
  return (
    <div>
      <div className='relative w-full mx-auto max-w-5xl'>
        <div className='relative w-full aspect-[16/9]'>
          <Image src='/home.png' alt='Imagen' fill className='object-contain' />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 px-4 pb-10 md:grid-cols-3 md:px-8 '>
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='flex items-center h-40'>
            <img
              src='/precision.png'
              alt='Precisión en Cada Puntada'
              className='object-cover w-full h-full pb-2'
            />
          </div>
          <h3 className='pb-2 font-bold text-center '>
            Precisión en Cada Puntada
          </h3>
          <p className='text-sm text-justify'>
            En DFYF, transformamos hilos en oportunidades. Con tecnología
            integrada en cada etapa de confección, eliminamos los cuellos de
            botella en la producción de prendas. Desde el corte automatizado de
            tejidos hasta el control de calidad con visión artificial,
            garantizamos entregas puntuales y cero desperdicios. Tu diseño,
            nuestra perfección.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='flex items-center h-40'>
            <img
              src='/simplificar.png'
              alt='Simplifica tu operación'
              className='object-cover w-full h-full pb-2'
            />
          </div>
          <h3 className='pb-2 font-bold text-center'>
            Confección Sin Complejidades{' '}
          </h3>
          <p className='text-sm text-justify'>
            ¿Colecciones complejas? Nosotros las simplificamos. Centralizamos el
            diseño, patronaje y confección en un flujo único adaptado a tu
            marca. Con DFYF, tu equipo solo se enfoca en la creatividad:
            nosotros nos encargamos de la logística, el escalado y los detalles
            técnicos. Hacemos moda, no problemas.
          </p>
          <p></p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow border-greenP hover:scale-110'>
          <div className='flex items-center h-40'>
            <img
              src='/automatiza.png'
              alt='Automatiza para crecer'
              className='object-cover w-full h-full pb-2'
            />
          </div>
          <h3 className='pb-2 font-bold text-center'>
            {' '}
            Automatización con Alma Artesanal
          </h3>
          <p className='text-sm text-justify'>
            Combinamos lo mejor de dos mundos: la agilidad de la automatización
            textil y el cuidado artesanal. Con nuestros sistemas inteligentes,
            producimos desde lotes pequeños hasta series masivas manteniendo
            estándares premium. Reducimos tiempos, no calidad. Innovación que
            viste al mundo.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-4 mx-auto space-y-1 text-center md:space-y-2 lg:space-y-4'>
        <h2 className='font-bold text-1xl md:text-4xl lg:text-3xl text-greenP '>
          En DFYF no solo confeccionamos prendas, construimos identidades
        </h2>
        <p className='text-base text-gray-600 md:text-lg lg:text-xl '>
          ¡Contáctanos y transforma tu forma de trabajar!
        </p>
        <a href='tel:+573059301802' className='flex gap-2 text-justify items'>
          <IoCallSharp /> +57 302 220 8870
        </a>
        <a
          href='mailto:correo@gmail.com'
          className='flex gap-2 text-justify items'
        >
          <MdEmail /> confeccionesdfyf@gmail.com{' '}
        </a>
      </div>
    </div>
  );
};

export default Homeview;
