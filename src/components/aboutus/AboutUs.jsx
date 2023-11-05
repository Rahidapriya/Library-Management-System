import { BsFillBarChartFill} from 'react-icons/bs';
import { BiAtom} from 'react-icons/bi';
import { BsFillBriefcaseFill} from 'react-icons/bs';

const AboutUs = () => {
    return (
        <div className='w-8/12 mx-auto'>
             <div className='flex flex-col items-center justify-center mt-20 mb-20 ' id='services' >
             <h3 className='text-[#ff0000]'>Know about us</h3>
             <h1 className='text-black text-2xl md:text-4xl font-metamorphous font-bold text-center'>__About Us__</h1>
            </div>
            <div className='flex gap-16 items-center justify-center '>
                <div>
<BsFillBarChartFill className='text-3xl  text-black'></BsFillBarChartFill>
                </div>
                <div>
      <h1 className='text-2xl font-bold'>Our Vision</h1>
      <p>At BoiPoka, we envision a world where access to books and knowledge is limitless. Our vision is to be a guiding light in the literary world, connecting readers to the endless possibilities of learning and self-discovery.</p>
                </div>
            </div>
            {/*  */}
            <div className='flex gap-16 items-center justify-center my-10'>
                <div>
<BiAtom className='text-3xl  text-black'></BiAtom>
                </div>
                <div>
      <h1 className='text-2xl font-bold'>Our Mission</h1>
      <p>BoiPoka is committed to empowering readers by offering an extensive collection of books, from all genres and eras. We believe in the transformative power of reading.</p>
                </div>
            </div>
            {/*  */}
            <div className='flex gap-16 items-center justify-center '>
                <div>
<BsFillBriefcaseFill className='text-3xl  text-black'></BsFillBriefcaseFill>
                </div>
                <div>
      <h1 className='text-2xl font-bold'>Our Core Values</h1>
      <p>At BoiPoka celebrates the rich tapestry of voices and perspectives within the world of literature. We are committed to offering books that represent diverse cultures, genres, and authors.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;