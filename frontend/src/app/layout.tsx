import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import VisibleWrapper from './wrappers/visibleWraper';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { AuthProvider } from './contexts/authContext';
import { Toaster } from 'react-hot-toast';


const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DFYF Project',
  description: 'Precisión en Cada Puntada',
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className='scroll-smooth'>
      <body className={`antialiased ${nunito.variable} bg-background`}>
        <AuthProvider>
          <div className='flex flex-col min-h-screen'>
            <VisibleWrapper>
              <Navbar />
            </VisibleWrapper>

            <main className='flex-1 px-mobile-pad lg:px-desktop-pad pt-6 pb-12'>
              {children}
            </main>

            <VisibleWrapper>
              <Footer />
            </VisibleWrapper>
          </div>

          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: '#175699',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '16px',
                },
                iconTheme: { primary: 'white', secondary: '#16a34a' },
              },
              error: {
                style: {
                  background: '#ef4444',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '16px',
                },
                iconTheme: { primary: 'white', secondary: '#dc2626' },
              },
              position: 'top-center',
              duration: 2000,
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
