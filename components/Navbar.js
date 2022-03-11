export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img height="50" width="60" src="https://ibisdev.tech/images/logo-white.svg" alt="Ibisdev logo" className="mx-5" />
                <img width="140" src="https://static.sketchfab.com/img/press/logos/sketchfab-logo-text-white.svg" alt="Sketchfab logo" />
            </div>
            <div className="flex-none">
                <a href="https://ibisdev.tech/" className="btn btn-primary">Visit our website</a>
            </div>
        </div>
    )
}