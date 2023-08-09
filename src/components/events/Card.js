import React from 'react';
import pic from '../assests/eventspics.jpg';
import './Card.css'; // Import the external CSS file

const CardWhiteTheme = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black my-8">
      <img className="w-full" src={pic} alt="Sunset in the mountains" />
      <div className="px-4 py-3 bg-gradient-to-t from-white to-transparent">
        <div>
          <p className="text-lg font-bold mb-1">Mancity vs InterMilan - FanDen India</p>
          <p className="opacity-80 mb-1">Champions League Finals</p>
        </div>
        <div className="flex flex-col text-center pt-2 border-t-2 border-black">
          <p className="font-semibold my-1">12:00</p>
          <button className="button-hover  text-sm p-3 rounded-sm px-1 ">
            Book Ticket
          </button>
        </div>
      </div>
      <hr className="border-black" />
      <div className="px-4 py-3 bg-gradient-to-t from-white to-transparent flex justify-between">
        <p className="text-sm">Venue: BBC Sports Lounge, Thane - 11th June</p>
      </div>
    </div>
  );
};

export default CardWhiteTheme;
