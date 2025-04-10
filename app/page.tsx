"use client";
import { useRouter } from "next/navigation"; // Import useRouter

import { SearchInput } from "@/components/SearchInput";
import TextCycle from "@/components/textCycle";
import { Logo } from "@/components/icons";

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const launchURL = (url: string) => {
    router.push(`/view?page_url=${encodeURIComponent(url)}`); // Navigate to /view with query param
  };

  return (
    <section className="mt-20">
      <div>
        <div className="text-2xl font-bold">
          <div className="py-4 text-center flex flex-col items-center">
            <Logo size={64} className="mb-8" />
            <div className="mb-2">
              You can now <TextCycle textArray={["SAVE", "SHARE"]} /> your
              favourite websites
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-80 text-center mx-auto">
        <SearchInput action={launchURL} /> {/* Pass launchURL as the action */}
      </div>
    </section>
  );
}
