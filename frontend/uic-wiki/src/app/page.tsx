"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [takenClasses, setTakenClasses] = useState<string[]>([]);
  const [loadingTaken, setLoadingTaken] = useState(true);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // figure out user taken classes
  useEffect(() => {
  const unsub = auth.onAuthStateChanged(async (user) => {
    console.log("Auth state changed:", user);

    if (!user) {
      setTakenClasses([]);
      setLoadingTaken(false);
      return;
    }

    const ref = collection(db, "users", user.uid, "takenClasses");

    try {
      const snap = await getDocs(ref);
      console.log("Firestore docs found:", snap.size);

      const list = snap.docs.map((doc) => doc.id); // course numbers as strings
      setTakenClasses(list);

    } catch (err) {
      console.error("Firestore error:", err);
    }

    setLoadingTaken(false);
  });

  return () => unsub();
}, []); // <-- EMPTY dependency array is correct!


  return (
    <main className="p-6 text-black">
      <h1 className="text-3xl font-semibold mb-6">
        {user ? `Hi, ${user.displayName}` : "Hi, Please sign in!"}
      </h1>

      {/* Main content area */}
      <div className="flex gap-6">
        {/* LEFT: Browse Classes */}
        <section className="flex-1 bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-semibold mb-4">Browse Classes</h2>

          <div className="space-y-6">
            <ClassLevel
              title="100 Level CS"
              codes={["CS 111", "CS 141", "CS 151"]}
              color="#f0f6ff"
              takenClasses={takenClasses}
            />
            <ClassLevel
              title="200 Level CS"
              codes={["CS 211", "CS 251", "CS 261", "CS 277"]}
              color="#D6E4FF"
              takenClasses={takenClasses}
            />
            <ClassLevel
              title="300 Level CS"
              codes={[
                "CS 301",
                "CS 341",
                "CS 342",
                "CS 361",
                "CS 362",
                "CS 377",
              ]}
              color="#84A9FF"
              takenClasses={takenClasses}
            />
            <ClassLevel
              title="400 Level CS"
              codes={["CS 401", "CS 499"]}
              color="#3366FF"
              takenClasses={takenClasses}
            />
          </div>
        </section>

        {/* RIGHT: Info Panels */}
        {/* <aside className="w-72 space-y-4">
          <InfoCard title="Updates" content="1 new notification on CS 401" />
          <InfoCard
            title="Discussion Forum"
            content="Chat with other CS students about a course (Reddit style)"
          />
          <InfoCard
            title="Student Reviews"
            content="1 new review added to CS 351"
          />
          <InfoCard
            title="Syllabus Center"
            content="Check out every CS Course’s Syllabus!"
          />
        </aside> */}
      </div>
    </main>
  );
}

function ClassLevel({
  title,
  codes,
  color,
  takenClasses
}: {
  title: string;
  codes: string[];
  color: string;
  takenClasses: string[];
}) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {codes.map((code) => {
          const classNumber = code.split(" ")[1];
          const isTaken = takenClasses.includes(classNumber);
          return (
            <Link
              key={code}
              href={`/classes/${classNumber}`}
              className="px-4 py-2 rounded-xl text-gray-800 font-semibold"
              style={{ 
                backgroundColor: isTaken ? "#388E3C" : color, 
                color: isTaken ? "white" : "#000000",
              }}
            >
              {code}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
