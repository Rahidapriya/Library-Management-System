import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Read = () => {
    const readData=useLoaderData();
    const {photo,name,category_name,desp}=readData;
    return (
        <div>
            <div className="card bg-base-100 mx-5 shadow-xl ">
  <figure><img src={photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center text-5xl font-bold">{name}</h2>
    <p className=' text-2xl font-bold text-[#ff0000]'>{category_name}</p>
    <p>{desp}</p>
    <p> Arthur Conan Doyle’s eccentric leading detective had been around for nearly 15 years when The Hound of the Baskervilles was published in 1902. Set before but written after Doyle’s 1893 short story “The Final Problem,” in which Holmes seemingly dies alongside his arch-nemesis, the evil Professor James Moriarty, The Hound of the Baskervilles led to Sherlock’s eventual resurrection. After taking an eight-year hiatus from the character following “The Final Problem,” Doyle leaned back into the popularity that Baker Street’s most famous resident had achieved by reviving him for a tale in which Holmes and his trusted assistant, Dr. John Watson, investigate the case of the phantom dog of Dartmoor. The book is considered by many to be the best of the four Holmes novels and an all-time classic detective chiller. The character of Sherlock Holmes has inspired numerous adaptations over the years, including the acclaimed BBC TV series Sherlock starring Benedict Cumberbatch, a pair of Sherlock Holmes movies led by Robert Downey Jr., and Disney’s beloved 1986 animated flick The Great Mouse Detective. —Megan McCluskey</p>
  </div>
</div>
        </div>
    );
};

export default Read;