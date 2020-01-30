import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontFamily: "'Rubik',sans-serif",
  textDecoration: "none",
  cursor: "pointer"
};

const menuToggle = () => {
    let nav = document.querySelector(".navlinks")
    if(nav.style.display == "none") {
        nav.style = "display: flex; flex-direction: column;"
    } else {
        nav.style.display = "none"
    }
}

const Header = () => (
  <div className="headerstyle">
      <div className="logoicon">
            <a>
                <img src="https://img.icons8.com/color/48/000000/github-2.png"/>
            </a>
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
            font-family: 'Rubik',sans-serif;
        }

        .headerstyle {
            display: flex;
            justify-content: space-between;
            padding-left: 20px;
            padding-right: 20px;
            max-width: 1200px;
            align-items: center;
            height: 100px;
            margin: 0 auto;
 
        }

        .hamburger {
            display: none;
        }

        img {
            cursor: pointer;
        }

        a {
            color: rgb(15, 27, 50)
        }

        button {
            margin-right: 15px;
            font-family: 'Rubik',sans-serif;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            background-color: rgb(65, 155, 249);
            color: white;
            font-size: 12px;
            width: 130px;
            border-width: 0px;
            border-radius: 4px;
            transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;

        }


        @media only screen and (max-width: 1000px) {
            .navlinks {
                display: none;
            }
            .hamburger {
                display: block;
                position: absolute;
                right: 20px;
            }

            .headerstyle {
                position: relative;
            }

            .headerstyle .navlinks {
                padding: 10px 10px;
                margin-top: 450px;
                background-color: white;
                width: 100%;
                align-items: flex-end;
                margin-right: -25px;
                overflow: hidden;
                line-height: 3;
            }
          }
        `}</style>
  </div>
);

export default Header;