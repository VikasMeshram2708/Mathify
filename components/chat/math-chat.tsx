import { Card } from "../ui/card";
import "katex/dist/katex.min.css";
import MathHero from "../home/math-hero";
import MathChatBox from "./math-chat-box";

export default function MathChat() {
  return (
    <div className="w-full px-6 py-4">
      <Card className="container mx-auto mt-10 max-w-screen-2xl">
        {/* Hero Section */}
        <MathHero />
        {/* Chat Section */}
        <MathChatBox />
      </Card>
    </div>
  );
}
