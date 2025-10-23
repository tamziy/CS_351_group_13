"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import React from 'react';

import classIcon1 from '../assets/images/cs111.png';
import classIcon2 from '../assets/images/cs141.png';
import classIcon3 from '../assets/images/cs151.png';
import classIcon4 from '../assets/images/cs211.png';
import classIcon5 from '../assets/images/cs251.png';
import classIcon6 from '../assets/images/cs261.png';
import classIcon7 from '../assets/images/cs277.png';
import classIcon8 from '../assets/images/cs301.png';
import classIcon9 from '../assets/images/cs341.png';
import classIcon10 from '../assets/images/cs342.png';
import classIcon11 from '../assets/images/cs361.png';
import classIcon12 from '../assets/images/cs362.png';
import classIcon13 from '../assets/images/csXXX.png';
import classIcon14 from '../assets/images/cs401.png';
import classIcon15 from '../assets/images/cs499.png';
import classIconNone from '../assets/images/csXXX.png';

import { classData } from "../classPage/dummy_classData";

const item = classData[12];

// interface ItemProps {
//     id: number;
//     courseNo: number;
//     classTitle: string;
//     classSummary: string;
//     reviews: string;
//     professors: string[];
//     credit_hours: number;
//     career_tracks: string[];
//     prereqs: string[];
//     resources: string[];
//     rating: string;
// }

// interface MyComponentProps {
//   item: ItemProps;
// }

export default function CS377() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/") // Flask route
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  function ClassIcon() {
    let toUse;
    let dum = item.courseNo;
    switch(dum) {
      case 111:
        toUse = classIcon1;
        break;
      case 141:
        toUse = classIcon2;
        break;
      case 151:
        toUse = classIcon3;
        break;
      case 211:
        toUse = classIcon4;
        break;
      case 251:
        toUse = classIcon5;
        break;
      case 261:
        toUse = classIcon6;
        break;
      case 277:
        toUse = classIcon7;
        break;
      case 301:
        toUse = classIcon8;
        break;
      case 341:
        toUse = classIcon9;
        break;
      case 342:
        toUse = classIcon10;
        break;
      case 361:
        toUse = classIcon11;
        break;
      case 362:
        toUse = classIcon12;
        break;
      case 377:
        toUse = classIcon13;
        break;
      case 401:
        toUse = classIcon14;
        break;
      case 499:
        toUse = classIcon15;
        break;
      // case 499:
      //   toUse = classIcon16;
      //   break;
      // case 499:
      //   toUse = classIcon17;
      //   break;
      default:
        toUse = classIconNone;
    }

    return (
      <Image src={toUse} alt="Class Image" className="w-[50px] h-[50px]" />
    );
  }

  return (
        // const { id, description, timestamp, start_time, end_time, category, address, author, max_members, members } = event;
    <main className="bg-[#ffffff] items-center min-h-screen text-black">
      <hr className="text-black"></hr>
      <br></br>
      <div className="grid grid-cols-[50%_20%] gap-6 justify-center">
        <div className="p-4 rounded-2xl space-y-4">
          <h1 className="text-5xl">CS {item.courseNo}</h1>
          <br></br>
          <div className="flex flex-row gap-4">
          <ClassIcon />
          <h2 className="text-2xl">{item.classTitle}</h2>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <p className="text-xl">Summary: </p>
            <p className="text-lg">{item.classSummary}</p>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-2xl">Reviews</h2>
            <p className="text-lg p-4">{item.reviews}</p>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-2xl">Professors</h2>
            <p className="text-lg p-4">{item.professors}</p>
          </div>
          {/* <div className="bg-[#faf9f9] p-4">
            <h2 className="text-2xl">Grade Distribution</h2>
          </div> */}
        </div>
        <div className="bg-[#c4c4c4] rounded-2xl p-4 text-center h-screen">
          <h2 className="text-2xl p-4">Credit Hours</h2>
          <p className="text-lg p-4">{item.credit_hours}</p>
          <hr></hr>
          <h2 className="text-2xl p-4">Career Track</h2>
          <p className="text-lg p-4">{item.career_tracks}</p>
          <hr></hr>
          <h2 className="text-2xl p-4">Prerequisites</h2>
          <p className="text-lg p-4">{item.prereqs}</p>
          <hr></hr>
          <h2 className="text-2xl p-4">Resources</h2>
          <p className="text-lg text-black p-4">{item.resources}</p>
          <hr></hr>
        </div>
      </div>

    </main>
  );
}