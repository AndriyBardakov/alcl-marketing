const certificates = [
  {
    title: "BIR Registration Seal",
    issuer: "Bureau of Internal Revenue",
    image: "/images/certificates/bir-registration-seal.webp",
    alt: "ALCL Marketing BIR registration seal with verification QR code",
    width: 1190,
    height: 484,
  },
  {
    title: "DTI E-Commerce Philippine Trustmark",
    issuer: "Department of Trade and Industry",
    image: "/images/certificates/dti-ecommerce-trustmark.webp",
    alt: "DTI E-Commerce Philippine Trustmark certificate for ALCL Marketing, OPC with verification QR code",
    width: 1122,
    height: 1622,
  },
];

const Certificates = () => (
  <section className="certificates-section" aria-labelledby="certificates-title">
    <div className="auto-container">
      <div className="certificates-heading">
        <h2 id="certificates-title">Our Registrations &amp; Certificates</h2>
        <p>
          View our BIR registration seal and DTI E-Commerce Philippine Trustmark.
          Scan the QR codes to verify, or select an image to view it at full size.
        </p>
      </div>
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.image}>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
            <a
              className="certificate-preview"
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} at full size (opens in a new tab)`}
            >
              <img
                src={certificate.image}
                alt={certificate.alt}
                width={certificate.width}
                height={certificate.height}
              />
              <span>View full size <span className="visually-hidden">(opens in a new tab)</span>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
      <div className="certificates-download">
        <a href="/documents/alcl-bir-dti-certificates.pdf" download>
          Download both certificates (PDF)
        </a>
      </div>
    </div>
  </section>
);

export default Certificates;
