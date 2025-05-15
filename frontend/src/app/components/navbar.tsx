'use client';
import Link from 'next/link';
import { routes } from '@/app/routes/routes';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '@/app/contexts/authContext';
import { IoIosLogOut } from 'react-icons/io';
import { isAdmin, isOperator } from '@/app/helpers/authhelpers';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, resetUserData, user } = useAuth();

  return (
    <div className='z-40 w-full text-white bg-blueP shadow-xl'>
      <nav className='relative flex items-center justify-between p-4 mx-auto max-w-7xl'>
        {/* Logo */}
        <div className='z-50 flex items-center'>
          <Link href={routes.home}>
            <Image
              src='/logo.jpg'
              alt='DFYF Logo'
              width={120}
              height={48}
              className='h-12 transition-transform duration-200 md:h-14 hover:scale-105'
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden z-50'>
          <button
            className='p-2 text-2xl transition hover:text-verde'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-1 justify-center'>
          <div className='flex items-center gap-4 lg:gap-6'>
            <NavLink href={routes.home}>Inicio</NavLink>
            <NavLink href={routes.mision}>Misión</NavLink>
            <NavLink href={routes.vision}>Visión</NavLink>
            <NavLink href={routes.manualEtica}>Ética</NavLink>
            <NavLink href={routes.procedimientoContratacion}>
              Contratación
            </NavLink>

            {isAdmin(user) && (
              <>
                <NavLink href={routes.userAdmin}>Usuarios</NavLink>
                <NavLink href={routes.home}>Admin</NavLink>
              </>
            )}

            {isOperator(user) && <NavLink href={routes.home}>Operador</NavLink>}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 h-screen w-full bg-blueP transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className='flex h-full flex-col items-center gap-4 overflow-y-auto pt-24 pb-8'>
            <button
              className='absolute top-6 right-6 text-3xl hover:text-verde'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <MobileNavLink href={routes.home} onClick={() => setIsOpen(false)}>
              Inicio
            </MobileNavLink>
            {/* Repetir para otros enlaces */}

            <div className='w-full border-t border-white/20 my-4'></div>

            {isAuth ? (
              <button
                onClick={() => {
                  resetUserData();
                  setIsOpen(false);
                }}
                className='flex w-full items-center justify-center gap-2 py-3 transition hover:text-verde'
              >
                <IoIosLogOut className='text-xl' />
                Cerrar Sesión
              </button>
            ) : (
              <MobileNavLink
                href={routes.login}
                onClick={() => setIsOpen(false)}
              >
                Login
              </MobileNavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

// Componentes auxiliares
const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Link
    href={href}
    className='px-3 py-2 text-sm transition hover:text-verde lg:text-base lg:px-4'
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => (
  <Link
    href={href}
    onClick={onClick}
    className='w-full py-3 text-center text-lg transition hover:text-verde'
  >
    {children}
  </Link>
);

export default Navbar;
