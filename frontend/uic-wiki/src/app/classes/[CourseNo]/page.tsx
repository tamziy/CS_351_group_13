"use client";

import { useParams } from "next/navigation";
import ClassPage from "../../classPage/classpage_all";
import { useEffect, useState } from "react";

export default function DynamicClassPage() {
  const params = useParams();
  const courseNo = Number(params.CourseNo);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [item, setItem] = useState(null as any);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseNo) return;

    fetch(`http://127.0.0.1:5000/class?num=${courseNo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setItem(data);
      })
      .catch(() => setError("Failed to reach backend"));
  }, [courseNo]);

  if (error) {
    return (
      <main className="p-6 text-black">
        <h1 className="text-2xl font-semibold">Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="p-6 text-black">
        <h1 className="text-2xl font-semibold">Class not found</h1>
        <p>No course data exists for this class</p>
      </main>
    );
  }

  return <ClassPage item={item} />;
}
