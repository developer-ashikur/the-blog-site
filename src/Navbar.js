const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <h1>The Blog Site</h1>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/blogs">Blogs</a>
            </div>
        </div>
    );
}
 
export default Navbar;