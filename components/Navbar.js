export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a rel="noreferrer" target="_blank" href="https://ibisdev.tech/"><img height="50" width="60" src="https://ibisdev.tech/images/logo-white.svg" alt="Ibisdev logo" className="mx-5" /></a>
                <a rel="noreferrer" target="_blank" href="https://sketchfab.com/blogs/enterprise/partners/ibisdev"><img width="140" src="https://static.sketchfab.com/img/press/logos/sketchfab-logo-text-white.svg" alt="Sketchfab logo" /></a>
            </div>
            <div className="flex-none">
                <a href="https://ibisdev.tech/#contact-us" className="btn btn-primary btn-xs md:btn-sm">Contact us</a>
            </div>
        </div>
    )
}