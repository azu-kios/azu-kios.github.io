import { artistInfo, exhibitions, publications, contactInfo } from '../data';
import './About.css';

function About() {
  return (
    <main className="about-page page-enter">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
      </div>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-image-container">
          <img
            src={artistInfo.profileImage}
            alt={artistInfo.name}
            className="profile-image"
          />
        </div>

        <div className="profile-content">
          <h2 className="bio-name">{artistInfo.name}</h2>
          <p className="bio-title">{artistInfo.title}</p>
          <p className="bio-text">{artistInfo.bio}</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Exhibitions Section */}
      <section className="about-section">
        <h2 className="about-section-title">Group Exhibitions</h2>
        <div className="exhibition-list">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="exhibition-item">
              <p className="exhibition-title">{exhibition.work}</p>
              <p className="exhibition-details">
                {exhibition.event}
                <br />
                {exhibition.date}, {exhibition.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Publications Section */}
      <section className="about-section">
        <h2 className="about-section-title">Publications</h2>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <div key={index} className="publication-item">
              <p className="publication-title">{publication.work}</p>
              <p className="publication-details">
                {publication.publication}
                <br />
                {publication.date}, {publication.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="about-section-title">Contact</h2>
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-label">Email: </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link"
            >
              {contactInfo.email}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Instagram: </span>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {contactInfo.instagram}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
