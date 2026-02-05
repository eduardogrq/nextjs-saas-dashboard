import Link from "next/link";

export default function LandingPage(){
    return(
        <section>
            <h1>Build SaaS Faster with Next.js</h1>
            <p>A professional dashboard built with modern architecture.</p>
            <Link href="/dashboard">Go to dashboard</Link>
        </section>
    )
}