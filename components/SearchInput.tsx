"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Input, Kbd } from "@heroui/react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import { SearchIcon } from "./icons";

export const SearchInput: React.FC<{
  placeholder?: string;
  action?: (value: string) => any;
}> = ({ placeholder, action }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle Command/Meta + K
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-row items-center gap-2">
      <Input
        aria-label="Search"
        ref={inputRef}
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
        placeholder={placeholder ?? "Search..."}
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
      <Button
        as={Link}
        isIconOnly
        aria-label="Take a photo"
        color="secondary"
        variant="flat"
        onPress={() => {
          action?.(inputRef.current?.value ?? "");
        }}
      >
        <Icon icon="fluent:triangle-right-48-filled" />
      </Button>
    </div>
  );
};
