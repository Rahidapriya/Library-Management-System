import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Read = () => {
    const readData=useLoaderData();
    const {photo,name,category_name,desp}=readData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category_name}</p>
    <p>{desp}</p>
    
  </div>
</div>
        </div>
    );
};

export default Read;