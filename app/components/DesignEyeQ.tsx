"use client";

import { useEffect } from "react";

export default function DesignEyeQ() {
  useEffect(() => {
    // The widget script is loaded in layout.tsx
    // This component just provides the container
  }, []);

  return (
    <div className="w-full">
      <div
        id="visualizer"
        data-zip="63090"
        className="min-h-[600px] rounded-lg overflow-hidden shadow-lg"
      />
    </div>
  );
}
