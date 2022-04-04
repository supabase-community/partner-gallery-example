import { PropsWithChildren, useEffect } from 'react'
import Footer from './Footer'
import Nav from './Nav'

type LayoutProps = {
  hideHeader?: boolean
  hideFooter?: boolean
}

const Layout = ({
  hideHeader = false,
  hideFooter = false,
  children,
}: PropsWithChildren<LayoutProps>) => {
  useEffect(() => {
    const key = localStorage.getItem('supabaseDarkMode')
    if (!key) {
      // Default to dark mode if no preference config
      document.documentElement.className = 'dark'
    } else {
      document.documentElement.className = key === 'true' ? 'dark' : ''
    }
  }, [])

  return (
    <>
      {!hideHeader && <Nav />}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer />}
    </>
  )
}

export default Layout
