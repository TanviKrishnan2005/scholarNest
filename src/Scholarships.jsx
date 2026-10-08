import { useState } from "react";
import { Link } from "react-router-dom";
import "./Scholarships.css";

const scholarships = [
    {
        id: 1,
        slug: "aicte-pragati",
        name: "AICTE Pragati Scholarship",
        category: "Women",
        course: "Engineering",
        type: "Merit Based",
        amount: "Financial assistance",
        deadline: "31 Oct 2026",
        description:
            "Scholarship scheme for girl students pursuing technical degree programmes.",
        tag: "For Girls",
        color: "coral",
    },
    {
        id: 2,
        slug: "aicte-swanath",
        name: "AICTE Swanath Scholarship",
        category: "Government",
        course: "Engineering",
        type: "Need Based",
        amount: "Financial assistance",
        deadline: "31 Oct 2026",
        description:
            "Welfare-based scholarship scheme for eligible students pursuing technical degree programmes.",
        tag: "Technical Degree",
        color: "blue",
    },
    {
        id: 3,
        slug: "pm-usp",
        name: "PM-USP Central Sector Scholarship",
        category: "Government",
        course: "Undergraduate",
        type: "Merit Based",
        amount: "Scholarship support",
        deadline: "31 Oct 2026",
        description:
            "Merit-based scholarship scheme for eligible college and university students.",
        tag: "College Students",
        color: "yellow",
    },
    {
        id: 4,
        slug: "aicte-saksham",
        name: "AICTE Saksham Scholarship",
        category: "Government",
        course: "Engineering",
        type: "Need Based",
        amount: "Financial assistance",
        deadline: "31 Oct 2026",
        description:
            "Welfare-based scholarship scheme for eligible specially abled students pursuing technical education.",
        tag: "Technical Degree",
        color: "green",
    },
    {
        id: 5,
        slug: "national-scholarship-pg",
        name: "National Scholarship for Post Graduate Studies",
        category: "Government",
        course: "Postgraduate",
        type: "Merit Based",
        amount: "Scholarship support",
        deadline: "31 Oct 2026",
        description:
            "Merit-based scholarship scheme for eligible postgraduate students.",
        tag: "Postgraduate",
        color: "purple",
    },
    {
        id: 6,
        slug: "pm-scholarship-capf",
        name: "PM Scholarship Scheme for CAPF",
        category: "Government",
        course: "Undergraduate",
        type: "Merit Based",
        amount: "Scholarship support",
        deadline: "31 Oct 2026",
        description:
            "Merit-based scholarship scheme for eligible wards of Central Armed Police Forces and Assam Rifles personnel.",
        tag: "Special Category",
        color: "blue",
    },
];

function Scholarships() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [course, setCourse] = useState("All");

    const filteredScholarships = scholarships.filter((scholarship) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            scholarship.name.toLowerCase().includes(searchText) ||
            scholarship.description.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "All" || scholarship.category === category;

        const matchesCourse =
            course === "All" || scholarship.course === course;

        return matchesSearch && matchesCategory && matchesCourse;
    });

    return (
        <div className="scholarships-page">

            {/* HEADER */}
            <section className="scholarship-header">
                <div>
                    <p className="eyebrow">THE SCHOLARSHIP BOARD 🎓</p>

                    <h1>
                        Find something
                        <span> worth applying for.</span>
                    </h1>

                    <p className="header-text">
                        Browse scholarships by course, category and eligibility.
                        No more digging through endless tabs.
                    </p>
                </div>

                <div className="header-doodle">
                    <span>₹</span>
                    <small>
                        your future
                        <br />
                        called ✦
                    </small>
                </div>
            </section>

            {/* FILTERS */}
            <section className="filter-section">

                <div className="scholarship-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search scholarships..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="filters">

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All categories</option>
                        <option value="Government">Government</option>
                        <option value="Women">Women</option>
                    </select>

                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="All">All courses</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                    </select>

                </div>
            </section>

            {/* RESULTS */}
            <section className="results-section">

                <div className="results-top">
                    <p>
                        Showing{" "}
                        <strong>{filteredScholarships.length}</strong>{" "}
                        scholarships
                    </p>

                    <span>2026–27 opportunities</span>
                </div>

                <div className="scholarship-grid">

                    {filteredScholarships.map((scholarship) => (

                        <article
                            className={`scholarship-card ${scholarship.color}`}
                            key={scholarship.id}
                        >

                            <div className="card-heading">

                                <span className="scholarship-tag">
                                    {scholarship.tag}
                                </span>

                                <span className="bookmark">
                                    ♡
                                </span>

                            </div>

                            <h2>{scholarship.name}</h2>

                            <p className="scholarship-description">
                                {scholarship.description}
                            </p>

                            <div className="card-details">

                                <div>
                                    <small>TYPE</small>
                                    <strong>{scholarship.type}</strong>
                                </div>

                                <div>
                                    <small>COURSE</small>
                                    <strong>{scholarship.course}</strong>
                                </div>

                            </div>

                            <div className="card-bottom">

                                <div>
                                    <small>APPLICATION DEADLINE</small>
                                    <strong>{scholarship.deadline}</strong>
                                </div>

                                <Link
                                    to={`/scholarships/${scholarship.slug}`}
                                >
                                    View details →
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

                {/* NO RESULTS */}
                {filteredScholarships.length === 0 && (

                    <div className="no-results">
                        <div>:(</div>

                        <h2>No scholarships found.</h2>

                        <p>
                            Try changing your search or filters.
                        </p>
                    </div>

                )}

            </section>

            {/* SOURCE NOTE */}
            <section className="source-note">

                <div>
                    <span>✦</span>

                    <div>
                        <strong>Important</strong>

                        <p>
                            Scholarship information can change. Always verify
                            eligibility, deadlines and application instructions
                            on the official source before applying.
                        </p>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Scholarships;