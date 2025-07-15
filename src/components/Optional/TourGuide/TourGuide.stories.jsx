import React, { useState, useEffect } from "react";
import { TourGuide } from "./TourGuide";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/TourGuide",
  component: TourGuide,
    parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

const DemoApp = () => {
  useEffect(() => {
    // Add demo elements to target
    const header = document.createElement("div");
    header.className = "demo-header logo";
    header.innerText = "🔷 Demo Logo";
    document.body.appendChild(header);

    const sidebar = document.createElement("div");
    sidebar.className = "demo-sidebar sidebar";
    sidebar.innerText = "📚 Sidebar Navigation";
    document.body.appendChild(sidebar);

    const content = document.createElement("div");
    content.className = "demo-main main-content";
    content.innerText = "📝 Main Content Area";
    document.body.appendChild(content);

    return () => {
      document.body.removeChild(header);
      document.body.removeChild(sidebar);
      document.body.removeChild(content);
    };
  }, []);

  const steps = [
    {
      target: ".logo",
      content: "This is your logo.",
    },
    {
      target: ".sidebar",
      content: "This is the sidebar where navigation lives.",
    },
    {
      target: ".main-content",
      content: "Here's your main workspace.",
    },
  ];

  const [run, setRun] = useState(true);

  return (
    <>
      {run && <TourGuide steps={steps} onFinish={() => setRun(false)} />}
    </>
  );
};

export const Default = () => <DemoApp />;
