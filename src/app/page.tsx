import { H1 } from "@/components/ui/Typography";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex flex-col items-center bg-teal-900/50">
      <H1 className="my-3 gap-1 flex opacity-55 hover:opacity-100 hover:cursor-pointer transition-all">
        <span className="text-cyan-500">{"<"}</span>
        <span className="text-teal-500 mr-2">BRANCODE</span>
        <span className="text-cyan-500">{"/>"}</span>
      </H1>
    </main>
  );
}
