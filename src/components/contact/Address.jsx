

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Address",
      text: (
        <>
          {/* 329 Queensberry Street, North
          <br /> Melbourne VIC 3051, Australia. */}

          73A M.H. Del Pilar St, Quezon City,
          <br /> Metro Manila, Philippines
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Call Us",
      text: (
        <>
          <a href="tel:+63 917 852 9927" className="phone">
            +63 917 852 9927
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          {" "}
          <a href="mailto:alclmarketing@afico.com">alclmarketing@afico.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <img
               
                src={`/images/icons/${item.iconName}.svg`}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
