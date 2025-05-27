const MapBox = () => {
  return (
    <div className="map-canvas">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.0566731348267!2d121.01719047691951!3d14.652724385839903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6f0dd1b6e71%3A0x1823e9ca91a1c368!2s73A%20M.H.%20Del%20Pilar%20St%2C%20Quezon%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sua!4v1747654450912!5m2!1sen!2sua"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBox;
