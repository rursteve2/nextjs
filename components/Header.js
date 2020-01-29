import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const linkDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
}

const logoStyle = {
    display: "flex"
}

const headerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 6fr",
    justifyContent: "space-between"
}

const menuToggle = () => {
    let nav = document.querySelector(".navlinks")
    if(nav.style.display == "none") {
        nav.style = "display: flex; flex-direction: column;"
    } else {
        nav.style.display = "none"
    }
}

const Header = () => (
  <div style={headerStyle}>
      <div className="logoicon" style={logoStyle}>
        <img src="https://img.icons8.com/color/48/000000/github-2.png"/>
      </div>
      <div className="hamburger">
        <a onClick={() => menuToggle()}>
            <img src="https://img.icons8.com/android/24/000000/menu.png"/>
        </a>
      </div>
      <div className="navlinks">
        <Link href="/">
            <a style={linkStyle}>Use cases</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Templates</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Integrations</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Docs</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>FAQ</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Pricing</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="/#">
            <a style={linkStyle}>Login</a>
        </Link>
        <button>SIGN UP FREE</button>
      </div>

      <style jsx>{`
        .navlinks {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .hamburger {
            display: none;
        }


        @media only screen and (max-width: 1000px) {
            .navlinks {
                display: none;
            }
            .hamburger {
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
          }
        `}</style>
  </div>
);

export default Header;