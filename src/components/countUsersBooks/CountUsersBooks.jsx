import { useState, useEffect } from 'react';
import img1 from '../../assets/banner-1.jpg';
import img2 from '../../assets/banner-2.jpg';
import img3 from '../../assets/banner-3.jpg';
import { BiBook } from 'react-icons/bi';
import { LiaUserSolid } from 'react-icons/lia';
import { GiSelfLove } from 'react-icons/gi';

const CountUsersBooks = () => {
  const [booksCount, setBooksCount] = useState(24090);
  const [usersCount, setUsersCount] = useState(12367);
  const [happyUsersCount, setHappyUsersCount] = useState(1245366);

  useEffect(() => {
    // Simulate auto-counting effect
    const interval = setInterval(() => {
      if (booksCount < 24290) {
        setBooksCount(booksCount + 1);
      }
      if (usersCount < 12567) {
        setUsersCount(usersCount + 1);
      }
      if (happyUsersCount < 1245566) {
        setHappyUsersCount(happyUsersCount + 1);
      }
    }, 10);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [booksCount, usersCount, happyUsersCount]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-32 my-36">
      <div>
        <div className="hero h-64" style={{ backgroundImage: `url(${img1})`,backgroundSize:'27% 50%', backgroundAttachment: 'fixed' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="mb-5 text-5xl font-bold flex justify-center">
                <BiBook></BiBook>
              </div>
              <p className="mb-3 text-4xl">Books We Have</p>
              <p className="mb-2 text-3xl">{booksCount}</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="hero h-64" style={{ backgroundImage: `url(${img3})`, backgroundSize: '27% 50%', backgroundAttachment: 'fixed' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="mb-5 text-5xl font-bold flex justify-center">
                <LiaUserSolid></LiaUserSolid>
              </div>
              <p className="mb-3 text-4xl">Total Members</p>
              <p className="mb-2 text-3xl">{usersCount}</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="hero h-64" style={{ backgroundImage: `url(${img2})`, backgroundSize: '27% 60%', backgroundAttachment: 'fixed' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="mb-5 text-5xl font-bold flex justify-center">
                <GiSelfLove></GiSelfLove>
              </div>
              <p className="mb-3 text-4xl">Happy Users</p>
              <p className="mb-2 text-3xl">{happyUsersCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUsersBooks;
