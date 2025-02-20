import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className='up'>
        <div className='ele'>
          <h3 className='title'>VideoGen</h3>
          <p>Video Generator is a web application that allows creating videos from a list of photos and an audio file. Users can upload multiple photos and an audio file, and the system will automatically combine them into a video edit.</p>
          <div>
            <Link><i class="fa-brands fa-facebook"></i></Link>
            <Link><i class="fa-brands fa-x-twitter"></i></Link>
            <Link><i class="fa-brands fa-instagram"></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-youtube"></i></Link>
          </div>
        </div>

        <div className='ele'>
          <h3 className='title'>Quick Link</h3>
          <div className='quicklink'>
            <Link to="" >Home</Link><br/>
            <Link to="/generator" >Generator</Link><br/>
            <Link to="/json-to-video" >Json to Video</Link><br/>
            <Link to="/support" >Support</Link><br/>
            <Link to="/pricing" >Pricing</Link>
          </div>
        </div>

        <div className='ele'>
          <h3 className='title'>Information</h3>
          <div>
            <p>FAQ</p>
            <p>Blog</p>
            <p>About us</p>
            <p>Recruiting</p>
          </div>
        </div>

        <div className='ele'>
          <h3 className='title'>Contact</h3>
          <div>
            <p><i class="fa-solid fa-location-dot"></i> Trường Đại học Hà Nội, Km9 Đ. Nguyễn Trãi, P. Văn Quán, Nam Từ Liêm, Hà Nội</p>
            <p><i class="fa-solid fa-envelope"></i>comdaogaron@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> 84+ 0987654321</p>
          </div>
        </div>
      </div>

      <div className='down'>© 2025 Cấm copy</div>
    </footer>
  );
};

export default Footer;
