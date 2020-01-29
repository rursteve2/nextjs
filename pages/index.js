import Header from '../components/Header'
export default function Index() {
    return (
      <div className="Index">
          <Header />
        <h1>build grow scale win</h1>
        <h2>your team's <div>animations</div>in a fast flexible workspace</h2>
        <form><input type="email" placeholder="name@company.com"></input><button type="submit">SIGN UP FREE</button></form>
        <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/ownzones.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/ownzones.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Ownzones" sizes="120px"/>
        <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/portfoliobox.png" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/portfoliobox.png" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Portfoliobox" sizes="150px"/>
        <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/waydev.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/waydev.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="Waydev" sizes="120px"/>
        <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/colorelephant.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/colorelephant.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="ColorElephant" sizes="140px"/>
        <img src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/mvpfactory.svg" data-src="https://cdn.archbee.io/6dbf3ad3b8edefa41fa68c9ebb6db975fbe8868b/public/customer-logos/mvpfactory.svg" data-sizes="auto" className="css-1sd3kx lazyautosizes lazyloaded" alt="MVPFactory" sizes="120px"/>
        <style jsx>{`
        h1, h2 {
            font-family: 'Rubik',sans-serif;
        }

        h2 {
            font-weight: bold;
        }


        .navlinks {
            color: red;
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