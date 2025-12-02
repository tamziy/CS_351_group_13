"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";


import classIcon1 from "../assets/images/cs111.png";
import classIcon2 from "../assets/images/cs141.png";
import classIcon3 from "../assets/images/cs151.png";
import classIcon4 from "../assets/images/cs211.png";
import classIcon5 from "../assets/images/cs251.png";
import classIcon6 from "../assets/images/cs261.png";
import classIcon7 from "../assets/images/cs277.png";
import classIcon8 from "../assets/images/cs301.png";
import classIcon9 from "../assets/images/cs341.png";
import classIcon10 from "../assets/images/cs342.png";
import classIcon11 from "../assets/images/cs361.png";
import classIcon12 from "../assets/images/cs362.png";
import classIcon13 from "../assets/images/csXXX.png";
import classIcon14 from "../assets/images/cs401.png";
import classIcon15 from "../assets/images/cs499.png";
import classIcon16 from "../assets/images/engr100.png";
import classIcon17 from "../assets/images/math180.png";
import classIconNone from "../assets/images/csXXX.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

interface ItemProps {
  id: number;
  courseNo: number;
  classTitle: string;
  classSummary: string;
  reviews: string;
  professors: string[];
  prof_links: string[];
  credit_hours: number;
  career_tracks: string[];
  prereqs: string[];
  resources: string[];
  difficulty: number;
  gradeData: ItemProps[];
}

interface MyComponentProps {
  item: ItemProps;
}

const ClassPage: React.FC<MyComponentProps> = ({ item }) => {
  const [message, setMessage] = useState("Loading...");

  const [taken, setTaken] = useState(false);
  const [loadingTaken, setLoadingTaken] = useState(true);

  useEffect(() => {
    fetch("https://tamziy.pythonanywhere.com/") // Flask route
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      console.log("Auth state changed:", user);

      if (!user) {
        setLoadingTaken(false);
        return;
      }

      const ref = doc(
        db,
        "users",
        user.uid,
        "takenClasses",
        String(item.courseNo)
      );

      try {
        const snap = await getDoc(ref);
        console.log("Firestore doc exists?", snap.exists());
        if (snap.exists()) setTaken(true);
      } catch (err) {
        console.error("Firestore error:", err);
      }

      setLoadingTaken(false);
    });

    return () => unsub();
  }, []); // <-- EMPTY dependency array is correct!

  function ClassIcon() {
    let toUse;
    const dum = item.courseNo;
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
      case 100:
        toUse = classIcon16;
        break;
      case 180:
        toUse = classIcon17;
        break;
      default:
        toUse = classIconNone;
    }

    return (
      <Image src={toUse} alt="Class Image" className="w-[50px] h-[50px]" />
    );
  }


const words = item.professors;

const dum = item.courseNo;
let links = ["#"];
const prof_links_111 = ["https://cs.uic.edu/profiles/franke-baker/", "https://cs.uic.edu/profiles/gonzalo-bello/"];
const prof_links_141 = ["https://cs.uic.edu/profiles/gu-zhaochen/"];
const prof_links_151 = ["https://cs.uic.edu/profiles/dey-drishika/", "https://cs.uic.edu/profiles/ibrahim-omar/"];
const prof_links_211 = ["https://cs.uic.edu/profiles/hodges-mark/", "https://cs.uic.edu/profiles/scott-reckinger/"];
const prof_links_251 = ["https://cs.uic.edu/profiles/ayala-daniel/", "https://cs.uic.edu/profiles/mitchell-theys/"];
const prof_links_261 = ["https://cs.uic.edu/profiles/koehler-adam/"];
const prof_links_277 = ["https://cs.uic.edu/profiles/carson-jordan/", "https://cs.uic.edu/profiles/cody-cranch/"];
const prof_links_301 = ["https://cs.uic.edu/profiles/katok-zoa/", "https://cs.uic.edu/profiles/gonzalo-bello/"];
const prof_links_341 = ["https://cs.uic.edu/profiles/shanon-reckinger/"];
const prof_links_342 = ["https://cs.uic.edu/profiles/hallenbeck-mark/"];
const prof_links_361 = ["https://cs.uic.edu/profiles/maratos-george-2/"];
const prof_links_362 = ["https://cs.uic.edu/profiles/evan-mccarty/"];
const prof_links_377 = ["https://cs.uic.edu/profiles/emanuelle-burton/", "https://cs.uic.edu/profiles/clayville-kristel/"];
const prof_links_401 = ["https://cs.uic.edu/profiles/ajay-kshemkalyani/", "https://cs.uic.edu/profiles/bhaskar-dasgupta/"];
const prof_links_499 = ["https://cs.uic.edu/profiles/john-bell/"];
const prof_links_180 = ["https://mscs.uic.edu/profiles/wash/", "https://mscs.uic.edu/profiles/jbergen/"];

switch (dum) {
  case 111:
    links = prof_links_111;
    break;
  case 141:
    links = prof_links_141;
    break;
  case 151:
    links = prof_links_151;
    break;
  case 211:
    links = prof_links_211;
    break;
  case 251:
    links = prof_links_251;
    break;
  case 261:
    links = prof_links_261;
    break;
  case 277:
    links = prof_links_277;
    break;
  case 301:
    links = prof_links_301;
    break;
  case 341:
    links = prof_links_341;
    break;
  case 342:
    links = prof_links_342;
    break;
  case 361:
    links = prof_links_361;
    break;
  case 362:
    links = prof_links_362;
    break;
  case 377:
    links = prof_links_377;
    break;
  case 401:
    links = prof_links_401;
    break;
  case 499:
    links = prof_links_499;
    break;
  case 180:
    links = prof_links_180;
    break;
  default:
    links = ["#"];
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
            <p className="text-lg">{item.credit_hours}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            Class Difficulty
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-lg">{item.difficulty} out of 5</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">Prerequisites</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ClassLevel
              title=""
              codes={item.prereqs}
              color="from-red-400 to-red-500"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">Current Professors</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {words.map((word, index) => (
              <a key={index} target="_blank"
              href={links[index]}
              className={`px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-red-400 to-red-500`}>
                {word}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  const chartData = item.gradeData;

  const chartConfig = {
    visitors: {
      label: "Percent",
    },
    chrome: {
      label: "A",
      color: "var(--chart-1)",
    },
    safari: {
      label: "B",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "C",
      color: "var(--chart-3)",
    },
    edge: {
      label: "D",
      color: "var(--chart-4)",
    },
    other: {
      label: "F",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  function ChartPieLabelList() {
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Grade Distribution</CardTitle>
          <CardDescription>Last Semester: Spring 2025</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[400px]"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="visitors" hideLabel />}
              />
              <Pie data={chartData} dataKey="visitors">
                <LabelList
                  dataKey="browser"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  }

  function ClassLevel({
    title,
    codes,
    color,
  }: {
    title: string;
    codes: string[];
    color: string;
  }) {
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
      <div className="max-w-full mx-auto px-6 py-8">
        {/* Class Name and Icon */}
        <div className="flex gap-4 items-center mb-8">
          <ClassIcon />
          <h1 className="text-3xl">
            <b>{item.classTitle}</b>
          </h1>
        </div>
        {!loadingTaken && (
          <button
            onClick={async () => {
              const user = auth.currentUser;
              if (!user) {
                alert("Please log in to save your courses.");
                return;
              }

              const ref = doc(
                db,
                "users",
                user.uid,
                "takenClasses",
                String(item.courseNo)
              );

              if (taken) {
                await deleteDoc(ref);
                setTaken(false);
              } else {
                await setDoc(ref, {
                  courseNo: item.courseNo,
                  timestamp: Date.now(),
                });
                setTaken(true);
              }
            }}
            className={`px-4 py-2 rounded-xl mb-6 transition ${
              taken
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {taken ? "✓ You've taken this class" : "Mark as Taken"}
          </button>
        )}

        {/* Top Part: Class Description & Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Class Description */}

          {/* Accordion */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl space-y-6">
              <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
                <h2 className="text-2xl">Summary:</h2>
                <p className="text-md p-4">{item.classSummary}</p>
              </div>
              <div className="bg-[#E0E0E0] p-4 rounded-3xl text-wrap">
                <h2 className="text-2xl">
                  <em>CS students say:</em>
                </h2>
                <p className="text-md p-4">&quot;{item.reviews}&quot;</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl">
            <AccordionDemo />
          </div>
          <div className="p-6 rounded-2xl">
            <ChartPieLabelList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClassPage;