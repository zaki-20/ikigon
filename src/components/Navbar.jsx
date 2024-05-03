import { Disclosure } from '@headlessui/react'
import reactLogo from '../assets/Untitled-1-02.png'; // Importing the image
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#dfe1e6]  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8  ">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                    <img src={reactLogo} alt="logo" className='w-28 bg-transparent'/>
                  </Link>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center">

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  <AnchorLink
                     href='#comanda'
                    className="text-[#4670aa] text-[11px] font-light pr-5 border-r-[1px] border-[#4670aa]"
                  >
                    comanda acum
                  </AnchorLink>
                  <Link
                    to="/message-form"
                    className="text-[#4670aa] text-[11px] font-light"
                  >
                    contact
                  </Link>
               
                </div>
            

              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose  className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" pb-3 pt-2 px-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <AnchorLink  href='#comanda' className=''>
              <Disclosure.Button
                as="a"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                   comanda acum  
              </Disclosure.Button>
                </AnchorLink>

                <Link to='/message-form' className=''>
                  <Disclosure.Button
                     as="a"
                     className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" >
                      contact 
                 </Disclosure.Button>
                  </Link>
           
            </div>
       
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
