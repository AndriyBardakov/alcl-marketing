

import Dealership from "@/components/dealership";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Dealership || ALCL Marketing',  
}



const ContactPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Dealership />
    </>
  );
};

export default ContactPage
