import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '~/lib/theme'

const Nav = () => {
  const { isDarkMode } = useTheme()

  return (
    <nav className="w-full border-b bg-scale-300 p-4">
      <Link href="https://supabase.com/">
        <a className="flex">
          <Image
            src={
              isDarkMode
                ? '/images/supabase-logo-wordmark--dark.svg'
                : '/images/supabase-logo-wordmark--light.svg'
            }
            alt="Supabase Logo"
            height={24}
            width={120}
          />
        </a>
      </Link>
    </nav>
  )
}

export default Nav
