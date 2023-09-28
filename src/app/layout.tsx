import '../styles/globals.css';
import '../styles/vdsphere.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import {Providers} from "./providers";


const poppins = Poppins({
  weight: ['100', '500', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'visualDev',
  description: 'A web development learning platform for visual learners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
