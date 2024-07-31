export default function Navbar() {
  return (
    <>
      <section className="section">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://png.pngtree.com/element_our/sm/20180410/sm_5acd1797b5783.jpg"
                alt="TinyCSP logo"
              />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarMain"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMain" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>

              <a className="navbar-item" href="/services">
                Services
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/about">
                    About
                  </a>
                  <a className="navbar-item" href="/contact">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" href="/report">Report an issue</a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item"></div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
