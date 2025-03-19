import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <section className="flex items-center justify-center mt-36">
      <div>
        <SearchInput />
      </div>
    </section>
  );
}
