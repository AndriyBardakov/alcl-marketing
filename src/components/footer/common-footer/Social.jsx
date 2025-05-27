import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";
import { SiShopee } from "react-icons/si";

const Social = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/ALCLMarketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://shopee.ph/alclmarketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiShopee size={24} />
      </a>
      <a
        href="https://www.instagram.com/alcl_marketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.youtube.com/@alclmarketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@alclmarketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok size={24} />
      </a>
    </>
  );
};

export default Social;
