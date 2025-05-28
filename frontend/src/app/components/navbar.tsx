'use client';
import Link from 'next/link';
import { routes } from '@/app/routes/routes';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoLogOut } from 'react-icons/io5';
import { useAuth } from '@/app/contexts/authContext';
import { isAdmin, isOperator } from '@/app/helpers/authhelpers';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, resetUserData, user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMenu = () => setIsOpen(false);

  if (!isMounted) {
    return <div className='h-20' />;
  }

  const GeneralLinks = () => (
    <>
      <NavLink href={routes.home}>Inicio</NavLink>
      <NavLink href={routes.mision}>Misión</NavLink>
      <NavLink href={routes.vision}>Visión</NavLink>
      <NavLink href={routes.manualEtica}>Ética</NavLink>
      <NavLink href={routes.procedimientoContratacion}>Contratación</NavLink>
    </>
  );

  const AdminLinks = () => (
    <>
      <NavLink href={routes.home}>Dashboard</NavLink>
      <NavLink href={routes.users}>Usuarios</NavLink>
      <NavLink href={routes.companies}>Empresas</NavLink>
      <NavLink href={routes.home}>Pagos</NavLink>
      <NavLink href={routes.home}>Operaciones</NavLink>
      <NavLink href={routes.home}>Liquidaciones</NavLink>
    </>
  );

  return (
    <div className='z-40 text-white bg-blueP'>
      <nav className='flex items-center justify-between h-20 p-4 mx-auto shadow-xl max-w-7xl'>
        {/* Logo y saludo */}
        <div className='z-50 flex items-center gap-4'>
          <Link href={routes.home} onClick={isOpen ? closeMenu : undefined}>
            <Image
              src='/logo.jpg'
              alt='DFYF Logo'
              width={120}
              height={48}
              className='w-auto h-12'
              priority
            />
          </Link>
          <p className='ml-4'>
            {user?.name ? (
              <>
                ¡Hola,{' '}
                <span className='font-medium text-greenP'>
                  {user.name.trim().split(' ')[0]}
                </span>
                ! 👋
              </>
            ) : (
              '¡Bienvenido! 👋'
            )}
          </p>
        </div>

        {/* Menú Desktop */}
        <div className='hidden md:flex items-center gap-6'>
          {!isAuth || !isAdmin(user) ? <GeneralLinks /> : <AdminLinks />}

          <div className='ml-4'>
            {!isAuth ? (
              <NavLink href={routes.login}>Iniciar Sesión</NavLink>
            ) : (
              <button
                onClick={resetUserData}
                className='flex items-center gap-2 px-4 py-2 transition hover:text-greenP'
              >
                <IoLogOut className='text-xl' />
                Salir
              </button>
            )}
          </div>
        </div>

        {/* Menú Mobile */}
        <div className='md:hidden z-50'>
          <button
            className='p-2 text-2xl transition hover:text-greenP'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Overlay Mobile */}
        {isOpen && (
          <div className='fixed inset-0 z-40 h-screen w-full bg-blueP md:hidden'>
            <div className='flex flex-col h-full p-4'>
              <div className='flex justify-between items-center mb-8'>
                <span className='text-2xl font-bold'>Menú</span>
                <IoClose
                  size={28}
                  onClick={closeMenu}
                  className='cursor-pointer'
                />
              </div>

              <div className='flex flex-col gap-4'>
                {!isAuth || !isAdmin(user) ? (
                  <>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Inicio
                    </MobileNavLink>
                    <MobileNavLink href={routes.mision} onClick={closeMenu}>
                      Misión
                    </MobileNavLink>
                    <MobileNavLink href={routes.vision} onClick={closeMenu}>
                      Visión
                    </MobileNavLink>
                    <MobileNavLink
                      href={routes.manualEtica}
                      onClick={closeMenu}
                    >
                      Ética
                    </MobileNavLink>
                    <MobileNavLink
                      href={routes.procedimientoContratacion}
                      onClick={closeMenu}
                    >
                      Contratación
                    </MobileNavLink>
                  </>
                ) : (
                  <>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Dashboard
                    </MobileNavLink>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Usuarios
                    </MobileNavLink>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Empresas
                    </MobileNavLink>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Pagos
                    </MobileNavLink>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Operaciones
                    </MobileNavLink>
                    <MobileNavLink href={routes.home} onClick={closeMenu}>
                      Liquidaciones
                    </MobileNavLink>
                  </>
                )}

                <div className='mt-8'>
                  {isAuth ? (
                    <button
                      onClick={() => {
                        resetUserData();
                        closeMenu();
                      }}
                      className='w-full flex justify-center items-center gap-2 py-3 bg-greenP rounded-lg'
                    >
                      <IoLogOut /> Cerrar Sesión
                    </button>
                  ) : (
                    <MobileNavLink
                      href={routes.login}
                      onClick={closeMenu}
                      isButton
                    >
                      Iniciar Sesión
                    </MobileNavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// Componentes auxiliares (se mantienen igual)
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className='px-3 py-2 transition hover:text-greenP hover:underline underline-offset-4'
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
  isButton = false,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isButton?: boolean;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`py-3 px-4 text-lg rounded-lg transition-colors ${
      isButton ? 'bg-greenP text-white hover:bg-greenP/90' : 'hover:bg-white/10'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
