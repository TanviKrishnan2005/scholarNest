
import { Link, useParams } from "react-router-dom";
import "./ScholarshipDetails.css";

const scholarshipData = {
    "aicte-pragati": {
        name: "AICTE Pragati Scholarship Scheme",
        subtitle: "For Girl Students — Technical Degree",
        category: "Women",
        type: "Merit Based",
        course: "Technical Degree",
        deadline: "31 October 2026",
        color: "coral",
        intro:
            "A scholarship scheme listed on the National Scholarship Portal for girl students pursuing technical degree programmes.",
        about:
            "The AICTE Pragati Scholarship Scheme for Girl Students supports eligible girl students pursuing technical degree programmes. Students should check the official scheme specifications and eligibility requirements before applying.",
        eligibility: [
            "For eligible girl students pursuing a technical degree programme.",
            "The exact eligibility conditions should be checked in the official scheme specifications.",
            "Students must satisfy the conditions specified by AICTE and the scholarship scheme.",
        ],
        documents: [
            "Academic documents",
            "Institute/course details",
            "Identity and registration details",
            "Any additional documents requested in the official application",
        ],
        steps: [
            "Check the official eligibility requirements.",
            "Complete the required One Time Registration on NSP.",
            "Log in and select the relevant scholarship scheme.",
            "Fill in the scholarship application carefully.",
            "Submit the application and complete the required verification process.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },

    "aicte-swanath": {
        name: "AICTE Swanath Scholarship Scheme",
        subtitle: "Technical Degree",
        category: "Government",
        type: "Welfare Based",
        course: "Technical Degree",
        deadline: "31 October 2026",
        color: "blue",
        intro:
            "A welfare-based scholarship scheme for eligible students pursuing technical degree programmes.",
        about:
            "The AICTE Swanath Scholarship Scheme supports eligible students pursuing technical degree programmes. Students should verify the detailed eligibility requirements and scheme specifications on the official portal.",
        eligibility: [
            "For eligible students pursuing a technical degree programme.",
            "Applicants must satisfy the conditions specified by the scheme.",
            "Check the official scheme specifications for the complete eligibility criteria.",
        ],
        documents: [
            "Academic documents",
            "Institute and course details",
            "Identity and registration details",
            "Additional documents specified by the scheme",
        ],
        steps: [
            "Review the official scheme eligibility.",
            "Complete One Time Registration on NSP if required.",
            "Log in to the National Scholarship Portal.",
            "Select the Swanath Scholarship Scheme.",
            "Submit the application and complete the required verification.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },

    "pm-usp": {
        name: "PM-USP Central Sector Scheme",
        subtitle: "Scholarship for College & University Students",
        category: "Government",
        type: "Merit Based",
        course: "Undergraduate",
        deadline: "31 October 2026",
        color: "yellow",
        intro:
            "A merit-based scholarship scheme listed on NSP for eligible college and university students.",
        about:
            "The PM-USP Central Sector Scheme of Scholarship for College and University Students supports eligible college and university students. Applicants should review the official scheme specifications for complete eligibility and application details.",
        eligibility: [
            "For eligible college and university students.",
            "Applicants must satisfy the academic and other conditions of the scheme.",
            "Check the official NSP specifications for the current eligibility requirements.",
        ],
        documents: [
            "Academic records",
            "Institute and course information",
            "Identity and registration information",
            "Documents requested during the official application",
        ],
        steps: [
            "Check the current eligibility criteria.",
            "Complete or use your NSP One Time Registration.",
            "Log in to the scholarship portal.",
            "Select the PM-USP Central Sector Scheme.",
            "Complete and submit the application.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },

    "aicte-saksham": {
        name: "AICTE Saksham Scholarship Scheme",
        subtitle: "For Eligible Differently-Abled Students",
        category: "Government",
        type: "Welfare Based",
        course: "Technical Degree",
        deadline: "31 October 2026",
        color: "green",
        intro:
            "A scholarship scheme intended to support eligible specially abled students pursuing technical education.",
        about:
            "The AICTE Saksham Scholarship Scheme supports eligible specially abled students pursuing technical education. Applicants should consult the official portal for current scheme guidelines, eligibility requirements and application dates.",
        eligibility: [
            "For eligible specially abled students pursuing technical education.",
            "Applicants must meet the disability-related and academic conditions specified by the scheme.",
            "Check the official scheme guidelines for the complete eligibility criteria.",
        ],
        documents: [
            "Academic records",
            "Valid disability certificate, if required by the scheme",
            "Institute and course details",
            "Identity and registration details",
            "Any additional documents specified by the official scheme",
        ],
        steps: [
            "Review the official Saksham Scholarship guidelines.",
            "Complete One Time Registration on NSP if required.",
            "Log in to the National Scholarship Portal.",
            "Select the relevant Saksham Scholarship scheme.",
            "Complete the application and required verification process.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },

    "national-scholarship-pg": {
        name: "National Scholarship for Post Graduate Studies",
        subtitle: "Financial Support for Postgraduate Students",
        category: "Government",
        type: "Merit Based",
        course: "Postgraduate",
        deadline: "31 October 2026",
        color: "purple",
        intro:
            "A scholarship scheme for eligible students pursuing postgraduate studies.",
        about:
            "The National Scholarship for Post Graduate Studies aims to provide financial support to eligible postgraduate students. Applicants should verify the current scheme guidelines, eligibility conditions and application schedule through the official scholarship portal.",
        eligibility: [
            "For eligible students pursuing postgraduate studies.",
            "Applicants must satisfy the academic and other conditions specified by the scheme.",
            "Check the official guidelines for the applicable course and admission requirements.",
        ],
        documents: [
            "Undergraduate academic records",
            "Postgraduate admission and institute details",
            "Identity and registration details",
            "Any additional documents requested by the scheme",
        ],
        steps: [
            "Review the official postgraduate scholarship guidelines.",
            "Complete One Time Registration on NSP if required.",
            "Log in to the National Scholarship Portal.",
            "Find the relevant postgraduate scholarship scheme.",
            "Submit the application and complete the required verification.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },

    "pm-scholarship-capf": {
        name: "PM Scholarship Scheme for CAPF",
        subtitle: "For Eligible Wards of CAPF and Assam Rifles Personnel",
        category: "Government",
        type: "Merit Based",
        course: "Undergraduate",
        deadline: "31 October 2026",
        color: "blue",
        intro:
            "A scholarship scheme for eligible wards of Central Armed Police Forces and Assam Rifles personnel.",
        about:
            "The Prime Minister's Scholarship Scheme supports eligible wards and widows of personnel covered by the scheme who pursue approved professional or technical courses. Applicants must verify current eligibility rules, eligible courses and application dates through the official source.",
        eligibility: [
            "For eligible wards or widows covered by the CAPF and Assam Rifles scheme.",
            "Applicants must meet the prescribed academic and other eligibility conditions.",
            "Only eligible courses and applicants covered by the current scheme guidelines qualify.",
        ],
        documents: [
            "Academic mark sheets",
            "Admission and institute details",
            "Identity and registration details",
            "Service-related certificate or supporting documents, as applicable",
            "Any additional documents specified by the scheme",
        ],
        steps: [
            "Check the official scheme guidelines and eligibility.",
            "Confirm that the course and applicant category qualify.",
            "Visit the official application source and follow its instructions.",
            "Complete the application with the required supporting documents.",
            "Submit the application and follow the prescribed verification process.",
        ],
        officialUrl: "https://scholarships.gov.in/",
    },
};

function ScholarshipDetails() {
    const { id } = useParams();
    const scholarship = scholarshipData[id];

    if (!scholarship) {
        return (
            <div className="details-page">
                <div className="not-found">
                    <span>😵</span>
                    <h1>Scholarship not found.</h1>
                    <p>We couldn't find the scholarship you're looking for.</p>
                    <Link to="/scholarships" className="back-button">
                        ← Back to scholarships
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="details-page">
            {/* TOP NAV */}
            <nav className="details-nav">
                <Link to="/" className="logo">
                    Scholar<span>Nest</span>
                </Link>

                <Link to="/scholarships" className="back-link">
                    ← All scholarships
                </Link>
            </nav>

            {/* HERO */}
            <section className={`details-hero ${scholarship.color}`}>
                <div className="details-hero-content">
                    <div className="details-tags">
                        <span>{scholarship.category}</span>
                        <span>{scholarship.type}</span>
                    </div>

                    <h1>{scholarship.name}</h1>
                    <h2>{scholarship.subtitle}</h2>
                    <p>{scholarship.intro}</p>
                </div>

                <div className="deadline-card">
                    <span>APPLICATION DEADLINE</span>
                    <strong>{scholarship.deadline}</strong>
                    <small>AY 2026–27</small>
                </div>
            </section>

            {/* CONTENT */}
            <main className="details-content">
                <div className="details-main">
                    {/* ABOUT */}
                    <section className="info-section">
                        <p className="section-label">01 — ABOUT</p>
                        <h2>What is this scholarship?</h2>
                        <p>{scholarship.about}</p>
                    </section>

                    {/* ELIGIBILITY */}
                    <section className="info-section">
                        <p className="section-label">02 — ELIGIBILITY</p>
                        <h2>Who can apply?</h2>

                        <div className="info-list">
                            {scholarship.eligibility.map((item, index) => (
                                <div className="info-item" key={index}>
                                    <span>✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DOCUMENTS */}
                    <section className="info-section">
                        <p className="section-label">03 — DOCUMENTS</p>
                        <h2>What might you need?</h2>

                        <div className="document-grid">
                            {scholarship.documents.map((document, index) => (
                                <div className="document-card" key={index}>
                                    <span>0{index + 1}</span>
                                    <p>{document}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* HOW TO APPLY */}
                    <section className="info-section">
                        <p className="section-label">04 — HOW TO APPLY</p>
                        <h2>Application process</h2>

                        <div className="steps">
                            {scholarship.steps.map((step, index) => (
                                <div className="step" key={index}>
                                    <div className="step-number">
                                        {index + 1}
                                    </div>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* SIDEBAR */}
                <aside className="details-sidebar">
                    <div className="apply-card">
                        <span className="apply-star">✦</span>
                        <p>READY TO CHECK?</p>

                        <h3>
                            Always verify the details before applying.
                        </h3>

                        <a
                            href={scholarship.officialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="official-button"
                        >
                            Visit Official Source →
                        </a>

                        <small>
                            ScholarNest provides discovery information.
                            The official portal is the source for final
                            eligibility, deadlines and applications.
                        </small>
                    </div>

                    <div className="quick-facts">
                        <p className="section-label">QUICK FACTS</p>

                        <div>
                            <span>Category</span>
                            <strong>{scholarship.category}</strong>
                        </div>

                        <div>
                            <span>Type</span>
                            <strong>{scholarship.type}</strong>
                        </div>

                        <div>
                            <span>Study Level</span>
                            <strong>{scholarship.course}</strong>
                        </div>

                        <div>
                            <span>Deadline</span>
                            <strong>{scholarship.deadline}</strong>
                        </div>
                    </div>
                </aside>
            </main>

            {/* FOOTER */}
            <footer className="details-footer">
                <Link to="/" className="logo">
                    Scholar<span>Nest</span>
                </Link>

                <p>
                    Find scholarships. Understand your options. Apply with
                    confidence.
                </p>
            </footer>
        </div>
    );
}

export default ScholarshipDetails;
