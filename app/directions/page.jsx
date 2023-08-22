import Link from 'next/link'

export default function Page() {
    return (
        <>
            <Link href="/">Landing page</Link>
            <br></br>
            <Link href="/about">to about</Link>
        </>
    )
}