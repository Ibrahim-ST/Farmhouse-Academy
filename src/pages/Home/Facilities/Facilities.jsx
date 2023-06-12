import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const Facilities = () => {
  return (
    <div className="my-2">
      <div>
        <SectionTitle heading="Facilities Football Academy"></SectionTitle>
      </div>
      <div className="grid md:grid-cols-3 items-center justify-items-center gap-x-16 gap-y-4">
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://cdne-totv8-prod-westeurope.azureedge.net/media/v4ojlpoe/malaga.png"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Football Field</h3>
              
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://j6q3t7s5.rocketcdn.me/wordpress/wp-content/uploads/2022/09/Gym-Flooring-Akitv-Gym-Design_1024.jpg"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Training Gym</h3>
              
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://shipraiders.com/images/2021/8/3/LockerRoom_Pictures_web_460.jpg"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Locker Rooms</h3>
              
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/08/28/16/Cafe-Football.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Cafeteria</h3>
              
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://www.itfc.co.uk/siteassets/image/202223/2223-misc/img_5017.jpg/Large"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Medical Room</h3>
              
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg w-96 ">
          <div class="relative">
            <img
              src="https://www.hydroworx.com/content/uploads/2015/07/TCU6peopleeditedwebphoto.jpg"
              alt="Card Image"
              class="w-full h-52 rounded-lg opacity-40"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 class="text-5xl font-semibold text-[#173931] font-mono  uppercase   ">Swimming Pool</h3>
              
            </div>
          </div>
        </div>
         
        
        
      </div>
    </div>
  );
};

export default Facilities;
