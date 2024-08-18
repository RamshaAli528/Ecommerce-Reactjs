import React from 'react';
import Button from '../Button/Button';

const Card = ({ image, productName, price }) => {
  return (
    <div className='flex justify-center m-7'>
      <div className="w-full bg-Cream rounded-md shadow-md my-7 hover:shadow-xl flex flex-col justify-between h-full">
        <img
          src={image}
          alt="product"
          className="h-[200px] w-full aspect-4/3 rounded-t-md object-contain mix-blend-multiply	p-6"
        />
        <div className="p-4 flex-grow">
          <h1 className="text-base font-semibold text-Purple font-serif">{productName}</h1>
          <p className="mt-3 text-base text-gray-600 text-Purple">$ {price}</p>
        </div>
        <div className="p-4 flex justify-center ml-0 pt-0">
          <Button btnText="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Card;
