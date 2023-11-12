import baseUrl from '../helpers/baseUrl'

export default function Home({ products }) {

  const productList = products.map((product) => {
    return (
        <li key={product._id}>
          <img src={product.productImage} alt="img1" />
          <p className="para">{product.productName}</p>
        </li>
    )
  })

  const productList2 = products.map((product, i) => {
    if (i === 0) {
      return (
        <>
          <div className="carousel-item active" data-bs-interval="10000" key={product._id}>
            <img className="carousel-item-img" src={product.productImage} alt="img1" />
            <p className="para">{product.productName}</p>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="carousel-item" data-bs-interval="10000" key={product._id}>
            <img className="carousel-item-img" src={product.productImage} alt="img1" />
            <p className="para">{product.productName}</p>
          </div>
        </>
      )
    }
  })

  return (
    <div className="main">
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <img src="/img/logo.svg" alt="Company Logo" />
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav no-search">
              <li className="nav-item"><a href="#">Home</a></li>
              <li className="nav-item"><a href="#">About</a></li>
              <li className="nav-item"><a href="#">Work</a></li>
              <li className="nav-item"><a href="#">Careers</a></li>
              <li className="nav-item"><a href="#">Contact Us</a></li>
              <i className="fa fa-search" id="search-icon"></i>
              <input className="search-input" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
        <section className="headline">
          <h1>Good ideas need good packaging.</h1>
          <p>Whether you’re looking for bulk glass or plastic containers, jars or closures, we’ve got you covered.
          </p>
        </section>
        <section className="features-new">
          <h2>Glass Containers</h2>
          <p className="para">For centuries, glass has been a reliable go-to for containing your crafts, concoctions
            and food and beverage products. Choose from a variety of glass bottles, glass jars, glass vials and
            candle glass containers in an assortment of colors and styles for hobby projects and mass
            production. You’ll find high-quality glass container options designed for essential oils, tinctures
            and candles, and food-safe glass bottles for dressings, marinades, and more. Oh, and glass
            containers are 100% recyclable forever. There’s no loss of purity or quality. Talk about earth
            shattering, right?</p>
          <div className="top-bottle-container">
            <ul className="bottle-container pt-4">
              {productList}
            </ul>
          </div>
          <div className="top-bottle-container2">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
              <div className="carousel-inner">
              {productList2}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="features mt-5">
          <div className="feature-container">
            <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png"
              alt="Flexbox Feature" />
            <h2>Flexbox Featured</h2>
            <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile
              navbar and show the power of mixing css grid and flexbox.</p>
          </div>
          <div className="feature-container">
            <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png"
              alt="Flexbox Feature" />
            <h2>CSS Grid Navigation</h2>
            <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing
              many ways we can use both.</p>
          </div>
          <div className="feature-container">
            <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg"
              alt="Flexbox Feature" />
            <h2>Basic HTML5</h2>
            <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/product`)
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}