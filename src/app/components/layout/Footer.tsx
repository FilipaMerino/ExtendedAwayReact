import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return(
    <section>
      <div className='flex flex-col items-center justify-center'>
        <div className='footerIcons'>
  
          <div>
          <a href="https://www.linkedin.com/in/filipamerino/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          </div>

          <div>
            <a href="https://www.facebook.com/afilipamerino/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20}/>
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/filipamerino/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20}/>
            </a>
          </div>
        </div>
        <p className='text-sm!'>
          © 2022 ExtendedAway, Inc All Rights Reserved.
        </p>
      </div>
    </section>
  )
}