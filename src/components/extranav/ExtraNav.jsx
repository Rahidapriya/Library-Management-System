
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
const ExtraNav = () => {
    return (
        <div className="bg-[#087393] py-2 hidden md:block">
            <div className='flex  font-bold text-white text-sm max-w-[1200px] mx-auto  justify-between items-center'>
                <div className="flex gap-2  justify-center items-center"><AiOutlineMail className='text-xl'></AiOutlineMail><p>boipoka@yahoo.com</p></div>
               
                <div className="flex justify-center items-center gap-2"><BsTelephone className='text-xl'></BsTelephone><p>+91677876335, +001255344398</p></div>
            </div>
        </div>
    );
};

export default ExtraNav;