
export default function Home() {
  return (
    <div className="homeP">
        <section className="hBanner">
          <div className="wrapper">
            <img src="img/home-banner.png" alt="Main Banner" />
          </div>
        </section>
        <section className="welcome-sec">
          <div className="wrapper">
            <div className="wLeft">
              <img src="img/wBanner.png" alt="Welcome Banner" />
            </div>
            <div className="wRight">
              <h1><span>Welcome to</span>Sunderban wealdcamp</h1>
              <p>
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae malesuada felis, eu malesuada tellus. Donec ac neque dui. </strong>
                Aliquam accumsan est metus, at tempus lacus blandit eu. In eget sapien lectus. Sed eu odio congue, porta ex at, commodo sapien. Sed venenatis at lectus ut molestie. Quisque semper pulvinar leo sit amet interdum. Nulla sollicitudin enim porttitor felis lacinia dictum. Nunc ut lacinia ante. Etiam vel auctor leo, ac faucibus tortor. Sed feugiat tristique sodales. Duis eu ligula a lorem ultricies bibendum. Donec condimentum, odio in interdum rhoncus, leo lacus mollis risus, sed commodo felis eros et turpis.
              </p>
              <a href="/about" className="btn-sm">Read More</a>
            </div>
          </div>
        </section>
        <section className="room-sec">
        <div className="wrapper">
          <h2>Our Rooms & Suites</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="roomList">
            <li>
              <img src="img/r1.jpg" alt="Rooms" />
              <span>Double Room</span>
            </li>
            <li>
              <img src="img/r2.jpg" alt="Rooms" />
              <span>Delux Room</span>
            </li>
            <li>
              <img src="img/r3.jpg" alt="Rooms" />
              <span>Family  Rom</span>
            </li>
            <li>
              <img src="img/r4.jpg" alt="Rooms" />
              <span>Cotage Rom</span>
            </li>
          </ul>
          </div>
        </section>
        <section className="map-sec">
          <div className="wrapper">
            <img src="img/map.jpg" alt="" />
          </div>
        </section>
    </div>
  )
}
