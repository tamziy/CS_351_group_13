"use client";

import TheFlowchart from "@/app/flowchart/theflowchart";

export default function FlowchartPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4 text-center text-black">CS Flowchart</h1>
      <div className="rounded-2xl bg-white shadow p-4">
        <TheFlowchart />
      </div>
    </main>
  );
}
