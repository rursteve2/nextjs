import Header from '../components/Header'
export default function Index() {
    return (
      <div className="Index">
          <Header />
            <div className="body">
                <div className="first">
                    <h1>build grow <br/> scale win</h1>
                    <div className="borderline"></div>
                    <div className="yourteam">
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
            </div>
        <style jsx>{`
        .body {
            padding-top: 100px;
            padding-bottom: 80px;
        }
        h1, h2 {
            font-family: 'Rubik',sans-serif;
        }

        h1 {
            font-size: 80px;
            margin-top: 0;
            margin-bottom: 0;
            letter-spacing: 3px;
            text-align: right;
            color: rgb(15, 27, 50);
            line-height: 92px;
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
            font-size: 36px;
            line-height: 42px;
            color: rgb(15, 27, 50);
        }

        .first {
            display: flex;
            justify-content: center;
            padding-bottom: 60px;
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

        button {
            cursor: pointer;
        }

        img {
            height: auto;
            margin: 10px 10px 10px 10px;
            filter: grayscale(100%);
        }

        img:hover {
            filter: none;
            transition: all .5s;
        }


        form {
            display: flex;
            width: 100%;
            padding-top: 15px;
        }

        input {
            border-width: 1px 1px 1px;
            border-style: solid solid solid;
            border-image: initial;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            font-size: 16px;
            min-height: 50px;
            max-width: 450px;
            min-width: 150px;
            width: 100%;
            border-color: rgba(201, 201, 201, .59) rgba(201, 201, 201, .59) rgba(201, 201, 201, .59);
            border-right: 0px;
            transition: border-color .15s ease-in-out 0s, box-shadow .15s ease-in-out 0s;
        }

        input::placeholder {
            padding: 5px 10px;
            font-family: 'Rubik',sans-serif;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: rgb(65, 155, 249);
            padding-left: 15px;
            padding-right: 15px;
            font-size: 16px;
            color: white;
            border: none;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        .yourteam {
            padding-top: 15px;
        }


        @media only screen and (max-width: 1000px) {
            .borderline {
                display: none;
            }

            .body {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .first {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            h1, h2 {
                text-align: center;
            }
            form {
                padding-top: 50px;
            }
            
            h1 {
                font-size: 60px;
                line-height: 60px;
                padding-top: 60px;
                padding-bottom: 50px;
            }

            h2 {
                font-size: 32px;
                line-height: 32px;
                max-width: 350px;
            }

            .body {
                padding-top: 0;
                padding-bottom: 0;
            }
            .yourteam {
                padding-top: 0;
                max-width: 300px;
                min-width: 300px;
                margin: 0 auto;
            }

            form {
                display: flex;
            }

            button {
                font-size: 14px;
            }

            .imglogo {
                flex-direction: column;
            }

          }
        `}</style>
      </div>
    )
  }