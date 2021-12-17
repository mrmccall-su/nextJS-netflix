import Image from 'next/image'
import Link from 'next/link'


//put the link in the logo component because wherever it will be displayed it will take you back to home
const Logo = () => {
    return <Link href="/">
        <a>
            <Image 
                src={`/images/netflix-logo.svg`}
                altText= "Netflix Logo"
                width={160}
                height={60}
            />
        </a>
    </Link>
    
}

export default Logo