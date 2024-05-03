
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#86a5be]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-24 sm:px-6 lg:px-8">
    
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
                <div className="p-2 text-white rounded-full border-2 border-white">
                <FaInstagram size={20}/>
                </div>
            </li>
            <li>
                <div className="p-2 text-white rounded border-2 border-white">
                <FiFacebook size={20}/>
                </div>
            </li>
          
          </ul>
          <ul className="mt-12 flex flex-wrap font-roboto text-[12px] justify-center gap-4 md:gap-6 lg:gap-8">
            <li>
              <a
                className="text-white transition "
                href="#"
              >
                {" "}
                FAQ{" "}
              </a>
            </li>
            <li>
              <a
                className="text-white transition "
                href="#"
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </li>
            <li>
              <a
                className="text-white transition "
                href="#"
              >
                {" "}
                Refund Policy{" "}
              </a>
            </li>
            <li>
              <a
                className="text-white transition"
                href="#"
              >
                {" "}
                Terms of Service{" "}
              </a>
            </li>
          </ul>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
