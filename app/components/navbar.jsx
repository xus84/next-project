import Link from "next/link"


function Navbar() {
    return (
        <div>
            <nav>
                <h1>Navbar</h1>
                <ul>
                    <li>
                        <Link href="/">
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            Store
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar