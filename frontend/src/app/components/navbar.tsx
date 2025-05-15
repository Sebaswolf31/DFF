'use client';
import Link from 'next/link';
import { routes } from '@/app/routes/routes';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '@/app/contexts/authContext';
import { IoIosLogOut } from 'react-icons/io';
import { isAdmin, isOperator } from '@/app/helpers/authhelpers';
import { ReactNode, MouseEventHandler } from 'react';

interface NavLinkProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, resetUserData, user } = useAuth();

  return (
    <div className='z-40 w-full text-white bg-blueP'>
      <nav className='relative flex items-center justify-between p-4 mx-auto shadow-xl max-w-7xl bg-opacity-80'>
        {/* Logo */}
        <div className='flex items-center z-50'>
          <Link
            href={routes.home}
            onClick={() => setIsOpen(false)}
            className='flex items-center'
          >
            <img
              src='/logo.jpg'
              alt='logo'
              className='w-auto h-12 transition-transform duration-200 md:h-14 hover:scale-105'
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden z-50'>
          <button
            className='p-2 text-2xl transition hover:text-verde'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-1 justify-center'>
          <div className='flex items-center gap-4 lg:gap-6'>
            <NavLink href={routes.home} onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
            <NavLink href={routes.mision} onClick={() => setIsOpen(false)}>
              Misión
            </NavLink>
            <NavLink href={routes.vision} onClick={() => setIsOpen(false)}>
              Visión
            </NavLink>
            <NavLink href={routes.manualEtica} onClick={() => setIsOpen(false)}>
              Manual de Ética
            </NavLink>
            <NavLink
              href={routes.procedimientoContratacion}
              onClick={() => setIsOpen(false)}
            >
              Contratación
            </NavLink>

            {/* Admin Links */}
            {isAdmin(user) && (
              <>
                <NavLink
                  href={routes.userAdmin}
                  onClick={() => setIsOpen(false)}
                >
                  Usuarios
                </NavLink>
                <NavLink href={routes.home} onClick={() => setIsOpen(false)}>
                  Admin 2
                </NavLink>
              </>
            )}

            {/* Operator Links */}
            {isOperator(user) && (
              <NavLink href={routes.home} onClick={() => setIsOpen(false)}>
                Operador 1
              </NavLink>
            )}
          </div>
        </div>

        {/* Desktop Auth Section */}
        <div className='hidden md:flex items-center gap-4'>
          {isAuth ? (
            <button
              onClick={() => {
                resetUserData();
                setIsOpen(false);
              }}
              className='flex items-center gap-2 px-4 py-2 transition hover:text-verde'
            >
              <IoIosLogOut className='text-xl' />
              <span className='text-sm lg:text-base'>Cerrar Sesión</span>
            </button>
          ) : (
            <NavLink href={routes.login} onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 h-screen w-full bg-blueP transition-transform duration-300 md:hidden 
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className='flex h-full flex-col items-center gap-4 overflow-y-auto pt-24 pb-8'>
            <MobileNavLink href={routes.home} onClick={() => setIsOpen(false)}>
              Inicio
            </MobileNavLink>
            <MobileNavLink
              href={routes.mision}
              onClick={() => setIsOpen(false)}
            >
              Misión
            </MobileNavLink>
            <MobileNavLink
              href={routes.vision}
              onClick={() => setIsOpen(false)}
            >
              Visión
            </MobileNavLink>
            <MobileNavLink
              href={routes.manualEtica}
              onClick={() => setIsOpen(false)}
            >
              Manual de Ética
            </MobileNavLink>
            <MobileNavLink
              href={routes.procedimientoContratacion}
              onClick={() => setIsOpen(false)}
            >
              Contratación
            </MobileNavLink>

            {/* Admin Mobile Links */}
            {isAdmin(user) && (
              <>
                <MobileNavLink
                  href={routes.userAdmin}
                  onClick={() => setIsOpen(false)}
                >
                  Usuarios
                </MobileNavLink>
                <MobileNavLink
                  href={routes.home}
                  onClick={() => setIsOpen(false)}
                >
                  Admin 2
                </MobileNavLink>
              </>
            )}

            {/* Operator Mobile Links */}
            {isOperator(user) && (
              <MobileNavLink
                href={routes.home}
                onClick={() => setIsOpen(false)}
              >
                Operador 1
              </MobileNavLink>
            )}

            <div className='w-full border-t border-white/20 my-4'></div>

            {/* Mobile Auth Section */}
            <div className='w-full px-4'>
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
        </div>
      </nav>
    </div>
  );
};

// Componente auxiliar para enlaces de escritorio
const NavLink = ({ href, onClick, children }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className='px-3 py-2 text-sm transition hover:text-verde lg:text-base lg:px-4'
  >
    {children}
  </Link>
);

// Componente auxiliar para enlaces móviles
const MobileNavLink = ({ href, onClick, children }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className='w-full py-3 text-center text-lg transition hover:text-verde'
  >
    {children}
  </Link>
);

export default Navbar;
