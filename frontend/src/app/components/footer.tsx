import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='bg-blueP ring-2 ring-greenP ring-opacity-100'>
      <div className='grid grid-cols-1 gap-8 px-6 mx-auto transition max-w-7xl md:grid-cols-3'>
        <div>
          <h3 className='pt-2 mb-3 text-lg font-semibold text-center text-white '>
            Quienes Somos
          </h3>
          <p className='text-justify text-gray-400 '>
            Somos un socio estratégico en la manufactura textil, especializados
            en la confección de prendas de alta calidad para marcas que buscan
            combinar diseño innovador con responsabilidad social y ambiental.
          </p>
        </div>

        <div>
          <h3 className='pt-2 mb-3 text-lg font-semibold text-center text-white'>
            Contáctanos
          </h3>
          <a
            href='tel:+573059301802'
            className='flex gap-2 text-justify text-gray-400 items'
          >
            <IoCallSharp /> +57 302 220 8870
          </a>
          <a
            href='mailto:correo@gmail.com'
            className='flex gap-2 py-2 text-justify text-gray-400 items'
          >
            <MdEmail /> Email{' confeccionesdfyf@gmail.com '}
          </a>
        </div>

        <div>
          <h3 className='pt-2 mb-3 text-lg font-semibold text-center text-white '>
            Síguenos
          </h3>
          <div className='flex space-x-8 text-justify text-gray-400'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <FaFacebookSquare />
            </a>

            <a href='' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className='py-2 mt-8 text-sm text-center text-gray-400'>
        © {new Date().getFullYear()} Confecciones DFYF. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
