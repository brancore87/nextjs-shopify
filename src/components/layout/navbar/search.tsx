"use client";

import { Input } from "@/components/ui/input";
import { cn, createUrl } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchFieldProps {
  className?: string;
}

export default function Search({ className }: SearchFieldProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }
  return (
    <form onSubmit={onSubmit} className={cn("grow", className)}>
      <div className="relative">
        <Input
          key={searchParams?.get("q")}
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
          defaultValue={searchParams?.get("q") || ""}
          className="px-10"
        />
        <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
      </div>
    </form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-4" />
      </div>
    </form>
  );
}
