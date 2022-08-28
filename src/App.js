import './App.css';
import {IonIcon} from "react-ion-icon";


function App() {
  return (
    <main>

      <aside className="sidebar" data-sidebar>

        <div className="sidebar-info">

          <figure className="avatar-box">
            <img src={require("./assets/images/my-avatar.png")} alt="Yash Munjal" width="100" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">Yash Munjal</h1>

            <p className="title">SDET Automation/Fullstack</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <IonIcon name="chevron-down"></IonIcon>
          </button>

        </div>

        <div className="sidebar-info_more">

          <div className="separator"></div>

          <ul className="contacts-list">

            <li className="contact-item">

              <div className="icon-box">
                <IonIcon name="mail-outline"></IonIcon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:yashmu45@gmail.com" className="contact-link">yashmu45@gmail.com</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <IonIcon name="logo-linkedin"></IonIcon>
              </div>

              <div className="contact-info">
                <p className="contact-title">LinkedIn</p>

                <a href="https://www.linkedin.com/in/yashmunjal45/" className="contact-link">@yashmunjal45</a>
              </div>

            </li>

          </ul>
        </div>

      </aside>



      <div className="main-content"> ̰
        <nav className="navbar">

          <ul className="navbar-list">

            <li className="navbar-item">
              <button className="navbar-link  active" data-nav-link>About</button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
            </li>


          </ul>

        </nav>

        <article className="about  active" data-page="about">

          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>

          <section className="about-text">
            <p>
              I'm an SDET engineer currently working for MakeMyTrip India Pvt. Ltd.
            </p>

            <p>
              My job is to automate and test out high functional Payments System in the organization.
              My specialization includes Selenium, TestNG, Rest Assured, as well as I have worked on Payment Backend Systems as well.
            </p>
          </section>



          <section className="service">

            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={require("./assets/images/icon-design.svg").default} alt="design icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web design</h4>

                  <p className="service-item-text">
                    The most modern and high-quality design made at a professional level.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={require("./assets/images/icon-dev.svg").default} alt="Web development icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web development</h4>

                  <p className="service-item-text">
                    High-quality development of sites at the professional level.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={require("./assets/images/icon-app.svg").default} alt="mobile app icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Mobile apps</h4>

                  <p className="service-item-text">
                    Professional development of applications for iOS and Android.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={require("./assets/images/icon-photo.svg").default} alt="camera icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Photography</h4>

                  <p className="service-item-text">
                    I make high-quality photos of any category at a professional level.
                  </p>
                </div>

              </li>

            </ul>

          </section>





          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <IonIcon name="book-outline"></IonIcon>
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                  molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Art director</h4>

                <span>2013 — 2015</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

            </ol>

          </section>



        </article>

        <article className="resume" data-page="resume">

          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <IonIcon name="book-outline"></IonIcon>
              </div>

              <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">University school of the arts</h4>

                <span>2007 — 2008</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">New york academy of art</h4>

                <span>2006 — 2007</span>

                <p className="timeline-text">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                  omnis..
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">High school of art and design</h4>

                <span>2002 — 2004</span>

                <p className="timeline-text">
                  Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                  magni dolores
                  eos.
                </p>

              </li>

            </ol>

          </section>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <IonIcon name="book-outline"></IonIcon>
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                  molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Art director</h4>

                <span>2013 — 2015</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

            </ol>

          </section>

          <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Web design</h5>
                  <data value="80">80%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: 80 +"%}"}}></div>
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Graphic design</h5>
                  <data value="70">70%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: 70 +"%"}}></div>
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Branding</h5>
                  <data value="90">90%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: 90 +"%"}}></div>
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">WordPress</h5>
                  <data value="50">50%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: 50 +"%"}}></div>
                </div>

              </li>

            </ul>

          </section>

        </article>





      </div>

    </main>
  );
}

export default App;
