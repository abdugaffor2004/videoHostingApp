import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'
import StoreProvider from '../redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Video Hosting App',
  description: "Откройте для себя мир бесконечных развлечений с нами, вашим любимым местом для видеохостинга! Независимо от того, являетесь ли вы создателем контента или преданным зрителем, наше приложение предназначено для того, чтобы поднять ваш опыт потоковой передачи на новую высоту.",
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
        </body>
      </html>
    
    
  )
}
