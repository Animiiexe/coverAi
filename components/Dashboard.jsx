import { Sparkles } from "lucide-react";
import PricingPage from "./PricingPage";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Hero section with space for navbar */}
      <div className="pt-24 flex flex-col items-center justify-center min-h-screen">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-600/20 rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-1.5 bg-purple-600/30 rounded-full">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Transform your ideas instantly
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">
            Transform your ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              stunning visuals
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-purple-200/80">
            Our AI-powered image generation platform creates professional
            quality images from simple text prompts.
          </p>
        </div>
      </div>
      <PricingPage/>
    </div>
  );
}
