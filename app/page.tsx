import { useRouter } from "next/navigation"; // Import useRouter

import { SearchInput } from "@/components/SearchInput";
import TextCycle from "@/components/textCycle";

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const launchURL = (url: string) => {
    router.push(`/view?url=${encodeURIComponent(url)}`); // Navigate to /view with query param
  };

  return (
    <section className="mt-20">
      <div>
        <div className="text-2xl font-bold">
          <div className="py-8 text-center">
            <span>You can now </span>
            <TextCycle textArray={["SAVE", "SHARE"]} />
            <span> your favourite websites</span>
          </div>
        </div>
      </div>
      <div className="mt-20 w-80 text-center mx-auto">
        <SearchInput action={launchURL} /> {/* Pass launchURL as the action */}
      </div>
    </section>
  );
}
