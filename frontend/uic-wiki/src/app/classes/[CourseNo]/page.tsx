"use client";

import { useParams } from "next/navigation";
import { classData } from "../../classPage/dummy_classData";
import ClassPage from "../../classPage/classpage_all";

export default function DynamicClassPage() {
  const params = useParams();
  const courseNo = Number(params.CourseNo);

  const item = classData.find((c) => c.courseNo === courseNo);

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
