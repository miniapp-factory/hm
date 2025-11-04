import { description, title, url } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { Share } from "@/components/share";
import Quiz from "@/components/quiz";

export { generateMetadata };

export default function Home() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4 min-h-screen bg-gradient-to-b from-purple-500 to-purple-900">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <Quiz />
      <Share text={`${url} - ${title}`} className="mt-4" />
    </main>
  );
}
