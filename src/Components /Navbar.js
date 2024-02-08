export default function Navbar(){
    return (
        <nav className="nav">
        <a href="/" className="site-title">
            Site Name
        </a>
        <ul>
            <li>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Projects">Projects</a>
                <a href="/Experience">Experience</a>
                <a href="/Contact">Contact</a>
            </li>
        </ul>
    </nav>
    )
}