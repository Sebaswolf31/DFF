'use client';
import Link from 'next/link';
import { routes } from '@/app/routes/routes'; // Asegúrate que esta ruta es correcta
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoLogOut } from 'react-icons/io5'; // IoIosLogOut ya estaba aquí
import { useAuth } from '@/app/contexts/authContext'; // Asegúrate que esta ruta es correcta
import { isAdmin, isOperator } from '@/app/helpers/authhelpers'; // Asegúrate que esta ruta es correcta
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, resetUserData, user } = useAuth();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className='sticky top-0 z-40 w-full text-white bg-blueP shadow-xl'>
      <nav className='relative flex items-center justify-between p-4 mx-auto max-w-7xl'>
        {/* Logo */}
        <div className='z-50 flex items-center'>
          <Link href={routes.home} onClick={isOpen ? closeMenu : undefined}>
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
          {' '}
          {/* z-50 para estar sobre el menú móvil */}
          <button
            className='p-2 text-2xl transition hover:text-greenP' // Cambié 'hover:text-verde' a 'hover:text-greenP' para coincidir con tu tailwind.config
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-1 justify-center items-center'>
          <div className='flex items-center gap-3 lg:gap-5'>
            {' '}
            {/* Ajustado gap ligeramente */}
            <NavLink href={routes.home}>Inicio</NavLink>
            <NavLink href={routes.mision}>Misión</NavLink>
            <NavLink href={routes.vision}>Visión</NavLink>
            <NavLink href={routes.manualEtica}>Ética</NavLink>
            <NavLink href={routes.procedimientoContratacion}>
              Contratación
            </NavLink>
            {isAuth &&
              isAdmin(user) && ( // Solo mostrar si está autenticado Y es admin
                <>
                  <NavLink href={routes.userAdmin}>Usuarios</NavLink>
                  {/* <NavLink href={routes.home}>Admin</NavLink> */}{' '}
                  {/* Considera una ruta específica para Admin si es diferente de home */}
                </>
              )}
            {isAuth &&
              isOperator(user) && ( // Solo mostrar si está autenticado Y es operador
                <>
                  {/* <NavLink href={routes.home}>Operador</NavLink> */}{' '}
                  {/* Considera una ruta específica para Operador */}
                </>
              )}
          </div>
        </div>

        {/* Auth Links Desktop (Opcional, si quieres login/logout visible en desktop) */}
        <div className='hidden md:flex items-center gap-3 lg:gap-5'>
          {!isAuth ? (
            <NavLink href={routes.login}>Login</NavLink>
          ) : (
            <button
              onClick={() => {
                resetUserData();
                // Opcional: redirigir a home o login page
                // router.push(routes.home);
              }}
              className='flex items-center gap-2 px-3 py-2 text-sm transition hover:text-greenP lg:text-base lg:px-4'
            >
              <IoLogOut className='text-xl' />
              Salir
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 h-screen w-full bg-blueP transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full' // Cambiado a translate-x para un slide desde la izquierda (o usa translate-y como tenías)
          }`}
        >
          <div className='flex flex-col h-full'>
            <div className='flex items-center justify-between p-4 border-b border-white/10'>
              <Link href={routes.home} onClick={closeMenu}>
                {/* Puedes poner un logo más pequeño aquí si quieres */}
                <span className='text-xl font-bold'>DFYF</span>
              </Link>
              <button
                className='p-2 text-3xl transition hover:text-greenP'
                onClick={closeMenu}
                aria-label='Cerrar menú'
              >
                <IoClose />
              </button>
            </div>

            <nav className='flex flex-col items-center flex-grow gap-3 p-4 overflow-y-auto pt-6'>
              <MobileNavLink href={routes.home} onClick={closeMenu}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href={routes.mision} onClick={closeMenu}>
                Misión
              </MobileNavLink>
              <MobileNavLink href={routes.vision} onClick={closeMenu}>
                Visión
              </MobileNavLink>
              <MobileNavLink href={routes.manualEtica} onClick={closeMenu}>
                Ética
              </MobileNavLink>
              <MobileNavLink
                href={routes.procedimientoContratacion}
                onClick={closeMenu}
              >
                Contratación
              </MobileNavLink>

              {isAuth &&
                isAdmin(user) && ( // Solo mostrar si está autenticado Y es admin
                  <>
                    <MobileNavLink href={routes.userAdmin} onClick={closeMenu}>
                      Usuarios
                    </MobileNavLink>
                    {/* <MobileNavLink href={routes.home} onClick={closeMenu}>Admin</MobileNavLink> */}
                  </>
                )}

              {isAuth &&
                isOperator(user) && ( // Solo mostrar si está autenticado Y es operador
                  <>
                    {/* <MobileNavLink href={routes.home} onClick={closeMenu}>Operador</MobileNavLink> */}
                  </>
                )}

              <div className='w-full border-t border-white/20 my-6'></div>

              {isAuth ? (
                <button
                  onClick={() => {
                    resetUserData();
                    closeMenu();
                    // Opcional: redirigir a home o login page
                    // router.push(routes.home);
                  }}
                  className='flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-white/10 py-3 text-lg transition hover:bg-white/20'
                >
                  <IoLogOut className='text-xl' />
                  Cerrar Sesión
                </button>
              ) : (
                <MobileNavLink
                  href={routes.login}
                  onClick={closeMenu}
                  isButtonLike={true} // Prop opcional para estilizar como botón
                >
                  Login
                </MobileNavLink>
              )}
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Componentes auxiliares (NavLink no necesita cambios importantes)
const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Link
    href={href}
    className='px-3 py-2 text-sm font-medium transition rounded-md hover:text-greenP hover:bg-white/5 lg:text-base lg:px-4' // 'hover:text-verde' cambiado a 'hover:text-greenP'
  >
    {children}
  </Link>
);

// MobileNavLink modificado ligeramente para posible estilo de botón
const MobileNavLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isButtonLike?: boolean; // Nueva prop opcional
}> = ({ href, onClick, children, isButtonLike }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`w-full max-w-xs py-3 text-center text-lg rounded-md transition hover:bg-white/10 ${
      isButtonLike
        ? 'bg-greenP text-white hover:bg-greenP/90'
        : 'hover:text-greenP' // 'hover:text-verde' cambiado
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
