import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useReveal } from '../hooks/useReveal';

export function RootLayout() {
  const location = useLocation();
  useReveal(location.pathname);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
