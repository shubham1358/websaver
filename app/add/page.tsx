import { SearchInput } from "@/components/SearchInput";
import { webSaverService } from "@/lib/webSaverService";

export default function AddPage() {
  const addWebsite = (url: string) => {
    webSaverService
      .saveData({ url })
      .then((response) => {
        console.log("Website added successfully:", response);
      })
      .catch((error) => {
        console.error("Error adding website:", error);
      });
  };

  return (
    <div>
      <SearchInput placeholder="Website URL..." action={addWebsite} />
    </div>
  );
}
