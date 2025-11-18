"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import React from 'react';
import Link from "next/link";

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
// import { AccordionDemo } from '../assets/images/accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a custom label"



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
  difficulty: number;
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
    let toUse;
    let dum = item.courseNo;
    switch (dum) {
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
      default:
        toUse = classIconNone;
    }

    return (
      <Image src={toUse} alt="Class Image" className="w-[50px] h-[50px]" />
    );
  }


  function AccordionDemo() {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Credit Hours</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-lg">
              {item.credit_hours}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">Class Difficulty</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-lg">
              {item.difficulty} out of 5
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">Prerequisites</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ClassLevel title="" codes={item.prereqs} color="from-red-400 to-red-500" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">Current Professors</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-lg">
              {item.professors.join(" / ")}
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-5">
        <AccordionTrigger className="text-xl">Resources</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            {item.resources}
          </p>
        </AccordionContent>
      </AccordionItem> */}
      </Accordion>
    )
  }

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-2)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
    label: {
      color: "var(--background)",
    },
  } satisfies ChartConfig

  function ChartBarLabelCustom() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Custom Label</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <XAxis dataKey="desktop" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="desktop"
                layout="vertical"
                fill="var(--color-desktop)"
                radius={4}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={8}
                  className="fill-(--color-label)"
                  fontSize={12}
                />
                <LabelList
                  dataKey="desktop"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    )
  }


  function ClassLevel({ title, codes, color }: { title: string; codes: string[]; color: string }) {
    return (
      <div>
        <h3 className="font-medium mb-2">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {codes.map((code) => {
            const classNumber = code.split(" ")[1];
            return (
              <Link
                key={code}
                href={`/classes/${classNumber}`}
                className={`px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r ${color}`}
              >
                {code}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    // Wrapper holding everything
    <main className="bg-gray-50 min-h-full text-black">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Class Name and Icon */}
        <div className="flex gap-4 items-center mb-8">
              <ClassIcon />
              <h1 className="text-3xl"><b>{item.classTitle}</b></h1>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-row gap-4">
            </div>
            <br></br>
            <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
              <h2 className="text-2xl">Summary:</h2>
              <p className="text-lg p-4">{item.classSummary}</p>
            </div>
            <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
              <h2 className="text-2xl"><em>CS students say:</em></h2>
              <p className="text-lg p-4">&quot;{item.reviews}&quot;</p>
            </div>
          </div>


          <div className="lg:col-span-1">
            <AccordionDemo />
          </div>
          <div>
            <ChartBarLabelCustom />
          </div> */}


      </div>
    </main>

  )
}

export default ClassPage;

{/* <main className="bg-gray-50 min-h-full text-black">
      <div className="grid grid-cols-[70%_20%] gap-6 justify-center">
        <div className="p-4 rounded-2xl space-y-4 text-wrap">
          <div className="flex flex-row gap-4">
            <Icon />
            <h1 className="text-3xl"><b>{item.Title}</b></h1>
          </div>
          <br></br>
          <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
            <h2 className="text-2xl">Summary:</h2>
            <p className="text-lg p-4">{item.Summary}</p>
          </div>
          <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
            <h2 className="text-2xl"><em>Review:</em></h2>
            <p className="text-lg p-4">&quot;{item.reviews}&quot;</p>
          </div>
        </div>
        <div className="mt-24">
          <Accordion />
        </div>
        <div className="mt-24">
          <ChartBar />  
        </div>
      </div> */}
