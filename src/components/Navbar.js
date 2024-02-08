export default function Navbar(){
    const path = window.location.pathname
    return (
        <nav className="nav">
        <a href="/" className="site-title">
            Site Name
        </a>
        <ul>
                <CustomLink href="/Home">Home</CustomLink>
                <CustomLink href="/About">About</CustomLink>
                <CustomLink href="/Projects">Projects</CustomLink>
                <CustomLink href="/Experience">Experience</CustomLink>
                <CustomLink href="/Contact">Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}