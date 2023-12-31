import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import ExtraNav from "../../components/extranav/ExtraNav";
import Navbar from "../../components/navbar/Navbar";
import BookCategoryCard from "../../components/bookcategorycard/BookCategoryCard";
import CountUsersBooks from "../../components/countUsersBooks/CountUsersBooks";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/aboutus/AboutUs";
import homebook from '../../assets/homebook.jpg';
import Contact from "../../components/contact/Contact";

const Home = () => {
    const cards=useLoaderData();
    return (
        <div>
            <ExtraNav></ExtraNav>
            <Navbar></Navbar>
           <Banner></Banner>
           <AboutUs></AboutUs>
          
           <div className='flex flex-col items-center justify-center mt-20 ' id='services' >
             <h3 className='text-[#ff0000]'>Choose Your Book Category</h3>
             <h1 className='text-black text-2xl md:text-4xl font-metamorphous font-bold text-center'>__Book Category__</h1>
            </div>
         <div className="flex flex-col lg:flex-row  items-center  justify-center">
            <div className="lg:w-5/12">
            <img src={homebook} alt="" />
            </div>
         <div className='flex flex-col items-center w-full lg:w-5/12'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 lg:my-20 lg:gap-2">
                                {
                                    cards.map(card=><BookCategoryCard key={card._id} card={card}></BookCategoryCard>)
                                }
                </div>
          </div>
         </div>
          <CountUsersBooks></CountUsersBooks>
          <Contact></Contact>
          
          <Footer></Footer>
        </div>
    );
};

export default Home;