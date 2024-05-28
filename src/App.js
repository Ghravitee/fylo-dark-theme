import logo from "./images/logo.svg";
import introImage from "./images/illustration-intro.png";
import access from "./images/icon-access-anywhere.svg";
import security from "./images/icon-security.svg";
import collaboration from "./images/icon-collaboration.svg";
import anyType from "./images/icon-any-file.svg";
import productive from "./images/illustration-stay-productive.png";
import iconArrow from "./images/icon-arrow.svg";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Formik, ErrorMessage} from "formik";
import "./App.css";

function App() {
  const team = [
    {
      teamRemark:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile1,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
    },
    {
      teamRemark:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile2,
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle",
    },
    {
      teamRemark:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile3,
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle",
    },
  ];


  return (
    <>
      <main className="app">
        <header>
          <nav>
            <a class="logo" href="/">
              <img src={logo} alt="fylo-logo" class="fylo" />
            </a>
            <ul class="nav__list">
              <li class="nav__item">
                <a class="nav__link" href="#features">
                  Features
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#signin">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Intro */}
        <div className="intro">
          <div className="intro-image">
            <img src={introImage} alt="intro" className="intro-image" />
          </div>
          <div className="intro-text">
            <h1 className="intro-text__heading">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="intro-text__paragraph">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <a href="/" className="intro-text__button">
              Get Started
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="features" id="features">
          <div className="feature1">
            <img src={access} alt="access" className="feature1__image" />
            <h2 className="feature1__heading">Access your files, anywhere</h2>
            <p className="feature1__text">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="feature2">
            <img src={security} alt="security" className="feature2__image" />
            <h2 className="feature2__heading">Security you can trust</h2>
            <p className="feature2__text">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="feature3">
            <img
              src={collaboration}
              alt="collaboration"
              className="feature3__image"
            />
            <h2 className="feature3__heading">Real-time collaboration</h2>
            <p className="feature3__text">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="feature4">
            <img src={anyType} alt="any-type" className="feature4__image" />
            <h2 className="feature4__heading">Store any type of file</h2>
            <p className="feature4__text">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>

        {/* Productive */}
        <div className="productive">
          <div className="productive-image">
            <img src={productive} alt="productive" />
          </div>
          <div className="productive-text">
            <h3 className="productive-text__heading">
              Stay productive, wherever you are
            </h3>
            <p className="productive-text__paragraph1">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs
            </p>
            <p className="productive-text__paragraph2">
              Securely share files and folders with friends, family and
              collegues for live collaboration. No email attachments required.
            </p>

            <div className="productive-text__link">
              <a href="www.jw.org" className="productive-text__link-content">
                <p>See how Fylo works</p>
                <img src={iconArrow} alt="how fylo works" className="fylo-works"/>
              </a>
              <div className="line"></div>
            </div>
          </div>
        </div>

        {/* Team */}

        <div className="team" id="team">
          {team.map((item) => (
            <div className="team-content">
              <p className="team-remark">{item.teamRemark}</p>
              <div className="team-info">
                <img src={item.image} alt="" className="team-image" />
                <div className="team-info__person">
                  <div className="team-info__person-name">{item.name}</div>
                  <div className="team-info__person-position">
                    {item.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* sign in */}

        <div className="signin" id="signin">
          <div className="signin-heading">Get early access today</div>
          <div className="signin-paragraph">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </div>

          <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Please enter a valid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            // console.log('Form Values:', values);
            alert("Thank you for signing up!!")

            // navigate("/success", { state: { email: values.email } });
          }}
        >
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="form" id="form" onSubmit={handleSubmit}>
              <div class="email-container">
                <input
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  placeholder="email@company.com"
                  className={`email mt-1 block w-full ${
                    errors.email && touched.email ? "formError1" : "formSuccess"
                  }`}
                />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="formError"
                  />
              </div>
              

              <button className="form-button" type="submit" disabled={isSubmitting}>
                Get Started For Free
              </button>
            </form>
          )}
        </Formik>
          {/* <form action="">
            <div class="email-container">
              <input
                type="email"
                placeholder="example@email.com"
                id="email"
                class="email"
              />
              <div class="error"></div>
            </div>
            <button type="submit" class="form-button">
              {" "}
              Notify Me
            </button>
          </form> */}
        </div>
      </main>

      {/* footer */}

      <footer className="footer">
        <div className="container">
          <a href="/">
            <img src={logo} alt="fylo" className="footer-logo" />
          </a>
          <div className="footer-flex">
           
              <div className="flex-container-1">
                <img
                  src={location}
                  alt=""
                  className="icon-location"
                />
                <p className="location">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div>
                <div className="flex-container-2">
                  <img src={phone} alt="" className="icon-phone" />
                  <p className="phone__number">Phone: +1-543-123-4567</p>
                </div>
                <div className="flex-container-3">
                  <img src={email} alt="" className="icon-email" />
                  <p className="email__text">example@fylo.com</p>
                </div>
              </div>
           
            <ul className="about-us">
              <li>
                <a href="/" className="about">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="jobs">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/" className="press">
                  Press
                </a>
              </li>
              <li>
                <a href="/" className="blog">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="contact-us">
              <li>
                <a href="/" className="contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" className="privacy">
                  Privacy
                </a>
              </li>
            </ul>
            <div className="icons-container">
              <a
                href="/"
                aria-label="This link is to the website's facebook account"
                class="icon-circle"
              ><FaFacebookF className="facebook" size={25}/></a>
              <a
                href="/"
                aria-label="This link is to the website's twitter account"
                class="icon-circle"
              ><FaTwitter className="twitter" size={25}/></a>
              <a
                href="/"
                aria-label="This link is to the website's instagram account"
                class="icon-circle"
              ><FaInstagram className="instagram" size={25}/></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
