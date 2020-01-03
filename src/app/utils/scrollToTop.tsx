import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 2);
  }, [pathname]);

  return null;
}
