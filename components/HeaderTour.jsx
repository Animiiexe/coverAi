"use client";

import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function HeaderTour() {
    
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const MIN_WIDTH = 768; // Set your desired minimum width
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (screenWidth < MIN_WIDTH || hasSeenTutorial === "true") {
      return;
    }
    if (screenWidth < MIN_WIDTH) {
      // Skip initializing the tour on small screens
      return;
    } 
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: "#create-button",
          popover: {
            title: "Create Content",
            description: "Click here to upload and generate new content!",
            position: "bottom",
          },
        },
        {
            element: "#product-link",
            popover: {
                title: "Product",
                description: "Learn more about our product features.",
                position: "bottom",
            },
        },
        {
          element: "#resources-link",
          popover: {
            title: "Resources",
            description: "Access tutorials, guides, and more resources.",
            position: "bottom",
          },
        },
        {
          element: "#community-link",
          popover: {
            title: "Community",
            description: "Join our community to share and explore content.",
            position: "bottom",
          },
         
        }
      ],
    });

    driverObj.drive();
    localStorage.setItem("hasSeenTutorial", "true");

    return () => {
      driverObj.destroy();
    };
  }, []);

  return null;
}
