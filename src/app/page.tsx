import { Blockquote, H1, P } from "@/components/ui/Typography";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex flex-col items-center bg-teal-900/50">
      <H1 className="my-3 gap-1 flex opacity-55 hover:opacity-100 hover:cursor-pointer transition-all">
        <span className="text-cyan-500">{"<"}</span>
        <span className="text-teal-500 mr-2">BRANCODE</span>
        <span className="text-cyan-500">{"/>"}</span>
      </H1>
      <P className="text-2xl text-cyan-500">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </P>
      <Blockquote className="text-2xl text-cyan-200">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </Blockquote>
    </main>
  );
}
