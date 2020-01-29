import Header from '../components/Header'
export default function Index() {
    return (
      <div className="Index">
          <Header />
        <div className="first">
            <h1>build grow <br/> scale win</h1>
            <div className="borderline"></div>
            <div>
                <h2>your team's <div className="animation">best practices </div><br/>in a fast flexible workspace</h2>
                <form><input type="email" placeholder="name@company.com"></input><button type="submit">SIGN UP FREE</button></form>
            </div>
        </div>
        <div className="imglogo">
            <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/ownzones.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/ownzones.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Ownzones" width="120px"/>
            <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/portfoliobox.png" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/portfoliobox.png" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Portfoliobox" width="150px"/>
            <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/waydev.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/waydev.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Waydev" width="120px"/>
            <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/colorelephant.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/colorelephant.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="ColorElephant" width="140px"/>
            <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/mvpfactory.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/mvpfactory.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="MVPFactory" width="120px"/>
        </div>
        <style jsx>{`
        h1, h2 {
            font-family: 'Rubik',sans-serif;
        }

        h1 {
            font-size: 60px;
            margin-top: 0;
            margin-bottom: 0;
        }

        .borderline {
            width: 1px;
            max-width: 1px;
            background-color: black;
            margin-left: 30px;
            margin-right: 30px;
        }

        h2 {
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 0;
        }

        .first {
            display: flex;
            justify-content: center;
        }

        .imglogo {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .navlinks {
            color: red;
        }

        .animation {
            display: inline;
        }

        img {
            height: auto;
        }


        @media only screen and (max-width: 1000px) {
            .navlinks {
                display: none;
            }
          }
        `}</style>
      </div>
    )
  }