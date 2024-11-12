'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Define the paths where the Header should be hidden
  const hideHeaderPaths = ['/login', '/signup'];
  const shouldHideHeader = hideHeaderPaths.includes(pathname);

  // Conditionally render the Header based on the pathname
  return !shouldHideHeader ? <Header /> : null;
}
