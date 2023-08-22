
import Image from 'next/image'
import profilePic from '../img/Television-PNG-Photo.webp'
import Link from 'next/link'

export default function Section() {   
    return (
        <>
            <nav>
                <ul>
                    <Link href="/store/products/devices">Products</Link>
                    <br></br>
                    <Link href="/store/products/services">Services</Link>
                    <li>Checkout</li>
                </ul>
            </nav>
            <h3>Our best models</h3>
            <Image
                src={profilePic}
                width={100}
                height={100}
            />
        </>
    )
}