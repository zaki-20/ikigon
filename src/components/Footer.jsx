import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#86a5be]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-24 sm:px-6 lg:px-8">
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <div className="p-2 text-white rounded-full border-2 border-white">
                <FaInstagram size={20} />
              </div>
            </li>
            <li>
              <div className="p-2 text-white rounded border-2 border-white">
                <FiFacebook size={20} />
              </div>
            </li>
          </ul >
          <ul className="mt-6 flex flex-wrap font-roboto text-[12px] items-center justify-center gap-x-4 md:gap-6 lg:gap-8">
            <li>
              <Link className="text-white transition " to="/gdpr">
                GDPR
              </Link>
            </li>
            <li>
              <Link className="text-white transition " to="/terms-and-conditions">
                Termeni si conditii
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
