import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItems from "./SongItems";
const DisplayHome = () => {
  // console.log(songsData);
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, i) => {
            return (
              <AlbumItem
                key={i}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
           return <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />;
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
