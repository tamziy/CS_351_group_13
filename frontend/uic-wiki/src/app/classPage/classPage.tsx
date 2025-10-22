"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import testImg from './assets/images/testImg.png';
import React from 'react';
import classIcon1 from '../assets/images/cs111.png';
import classIcon2 from '../assets/images/cs141.png';
import classIcon3 from '../assets/images/cs151.png';

interface ItemProps {
    id: number;
    courseNo: number;
    classTitle: string;
    classSummary: string;
    reviews: string;
    professors: string[];
    credit_hours: number;
    career_tracks: string[];
    prereqs: string[];
    resources: string[];
    rating: string;
}

interface MyComponentProps {
  item: ItemProps;
}

const ClassPage: React.FC<MyComponentProps> = ({ item }) => {
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
    let toUse = (item.courseNo == 111) ? classIcon1 : (item.courseNo == 141) ? classIcon2 : classIcon3;
    return (
      <Image src={toUse} alt="Testing out this image" className="w-[50px] h-auto" />
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
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-2xl">Grade Distribution</h2>
          </div>
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

export default ClassPage;
