"use client";
import { useState } from "react";
import { addToast, Spinner } from "@heroui/react";

import { SearchInput } from "@/components/SearchInput";
import { webSaverService } from "@/lib/webSaverService";

export default function AddPage() {
  const [loading, setLoading] = useState(false);

  const addWebsite = (url: string) => {
    setLoading(true); // Start loader
    webSaverService
      .saveData({ url })
      .then((response) => {
        console.log("Website added successfully:", response);
        addToast({
          title: "Website added successfully",
          description: "You can now look it up",
          variant: "bordered",
          color: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding website:", error);
        addToast({
          title: "Failed to save website",
          variant: "bordered",
          color: "danger",
        });
      })
      .finally(() => {
        setLoading(false); // Stop loader
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <SearchInput placeholder="Website URL..." action={addWebsite} />
      )}
    </div>
  );
}
