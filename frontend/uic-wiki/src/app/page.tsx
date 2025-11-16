"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

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
              color="from-pink-400 to-pink-500"
            />
            <ClassLevel
              title="200 Level CS"
              codes={["CS 211", "CS 251", "CS 261", "CS 277"]}
              color="from-orange-400 to-orange-500"
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
              color="from-purple-500 to-purple-700"
            />
            <ClassLevel
              title="400 Level CS"
              codes={["CS 401", "CS 499"]}
              color="from-green-500 to-green-600"
            />
          </div>
        </section>

        {/* RIGHT: Info Panels */}
        <aside className="w-72 space-y-4">
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
        </aside>
      </div>
    </main>
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

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
