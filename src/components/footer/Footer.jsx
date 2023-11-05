
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 bg-[#087393]  mt-20 py-10 text-white font-bold">
  <aside>
   <img src={logo} className=' w-12 h-10' alt="" />
    <p className='text-2xl font-bold text-black'>BoiPoka</p>
    <p>Providing reliable service since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title text-black">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-black">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-black">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;