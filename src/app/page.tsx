import { Blockquote, H1, P } from "@/components/ui/Typography";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex flex-col items-center dark:text-white text-black dark:bg-teal-900/50">
      <H1 className="my-3 gap-1 flex hover:cursor-pointer transition-all  mt-10">
        <span className="text-teal-800 dark:text-cyan-500">{"<"}</span>
        <span className="text-teal-800 dark:text-teal-500 mr-2">BRANCODE</span>
        <span className="text-teal-800 dark:text-cyan-500">{"/>"}</span>
      </H1>
      <P className="text-2xl">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </P>
      <Blockquote className="text-2xl">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </Blockquote>
    </main>
  );
}
