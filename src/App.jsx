import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Scholarships from "./Scholarships";
import ScholarshipDetails from "./ScholarshipDetails";

function Home() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/" className="logo">
          Scholar<span>Nest</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/scholarships">Scholarships</Link>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </div>

        <Link to="/scholarships" className="profile-btn">
          Find Scholarships
        </Link>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">HEY, STUDENT 👋</p>

            <h1>
              Your next
              <span> scholarship</span>
              might be closer than you think.
            </h1>

            <p className="hero-text">
              Stop opening 17 tabs just to figure out if you qualify.
              Find scholarships that actually make sense for you.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search scholarships, courses or categories..."
              />

              <Link to="/scholarships">
                <button>Search</button>
              </Link>
            </div>

            <div className="quick-links">
              <span>Try looking for:</span>
              <Link to="/scholarships">BTech</Link>
              <Link to="/scholarships">Girls</Link>
              <Link to="/scholarships">Merit</Link>
              <Link to="/scholarships">Government</Link>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="hero-card">
            <div className="card-top">
              <span>SCHOLARNEST</span>
              <span>2026–27</span>
            </div>

            <div className="card-icon">✦</div>

            <div>
              <h3>Find what fits you.</h3>

              <p>
                Browse opportunities based on your education, course and
                eligibility.
              </p>
            </div>

            <div className="card-tags">
              <span>Government</span>
              <span>Merit</span>
              <span>Need-based</span>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories" id="scholarships">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Browse scholarships</h2>
            </div>

            <Link to="/scholarships" className="view-all">
              View all →
            </Link>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <span className="category-number">01</span>

              <h3>Government</h3>

              <p>
                Government-funded scholarships and schemes for students.
              </p>

              <Link to="/scholarships" className="arrow">
                ↗
              </Link>
            </div>

            <div className="category-card">
              <span className="category-number">02</span>

              <h3>BTech & Engineering</h3>

              <p>
                Funding opportunities made for technical and engineering
                students.
              </p>

              <Link to="/scholarships" className="arrow">
                ↗
              </Link>
            </div>

            <div className="category-card">
              <span className="category-number">03</span>

              <h3>Merit Based</h3>

              <p>
                Scholarships for students with strong academic performance.
              </p>

              <Link to="/scholarships" className="arrow">
                ↗
              </Link>
            </div>

            <div className="category-card">
              <span className="category-number">04</span>

              <h3>Women</h3>

              <p>
                Scholarships created specifically for women students.
              </p>

              <Link to="/scholarships" className="arrow">
                ↗
              </Link>
            </div>
          </div>
        </section>

        {/* WHY SCHOLARNEST */}
        <section className="why-section" id="about">
          <div>
            <p className="eyebrow">WHY SCHOLARNEST?</p>

            <h2>
              Less searching.
              <br />
              More opportunities.
            </h2>
          </div>

          <div className="features">
            <div>
              <span>01</span>

              <h3>Easy to discover</h3>

              <p>
                Find scholarships through course, category and education
                level instead of searching through dozens of websites.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>Clear eligibility</h3>

              <p>
                Quickly understand who can apply and what documents are
                required before spending time on an application.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>Official sources</h3>

              <p>
                Every opportunity connects students to the official source
                where they can read the complete requirements and apply.
              </p>
            </div>
          </div>
        </section>

        {/* GUIDES */}
        <section className="categories" id="guides">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NEED SOME HELP?</p>

              <h2>Scholarship guides</h2>
            </div>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <span className="category-number">01</span>
              <h3>Eligibility</h3>
              <p>
                Understand common scholarship eligibility requirements.
              </p>
              <span className="arrow">↗</span>
            </div>

            <div className="category-card">
              <span className="category-number">02</span>
              <h3>Documents</h3>
              <p>
                Know what documents you may need before applying.
              </p>
              <span className="arrow">↗</span>
            </div>

            <div className="category-card">
              <span className="category-number">03</span>
              <h3>How to Apply</h3>
              <p>
                A simple guide to navigating scholarship applications.
              </p>
              <span className="arrow">↗</span>
            </div>

            <div className="category-card">
              <span className="category-number">04</span>
              <h3>Find Your Match</h3>
              <p>
                Explore scholarships based on your course and profile.
              </p>
              <span className="arrow">↗</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <p className="eyebrow">ONE MORE THING...</p>

            <h2>
              Your scholarship
              <br />
              search starts here.
            </h2>

            <p>
              Explore opportunities, check your eligibility and find the
              funding that fits you.
            </p>

            <Link to="/scholarships">
              <button className="cta-button">
                Explore Scholarships →
              </button>
            </Link>
          </div>

          <div className="cta-sticker">
            <span>YOU</span>
            <strong>GOT</strong>
            <span>THIS ✦</span>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <Link to="/" className="logo">
            Scholar<span>Nest</span>
          </Link>

          <p>Helping students discover better funding opportunities.</p>
        </div>

        <div className="footer-links">
          <Link to="/scholarships">Scholarships</Link>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route
          path="/scholarships/:id"
          element={<ScholarshipDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;