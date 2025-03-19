"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Kbd } from "@heroui/react";
import { SearchIcon } from "./icons";

export const SearchInput = () => {
  const [count, setCount] = useState(0);

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};
