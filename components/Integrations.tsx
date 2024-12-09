"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import "../app/globals.css";

const integrations = [
  {
    id: 1,
    name: "Slack",
    img: "https://img.icons8.com/color/48/000000/slack-new.png",
  },
  {
    id: 2,
    name: "Zoom",
    img: "https://img.icons8.com/ios-filled/50/000000/zoom.png",
  },
  {
    id: 3,
    name: "Salesforce",
    img: "https://img.icons8.com/color/48/000000/salesforce.png",
  },
  {
    id: 4,
    name: "HubSpot",
    img: "https://img.icons8.com/?size=100&id=zKmWNgqJoDBq&format=png&color=000000",
  },
  {
    id: 5,
    name: "QuickBooks",
    img: "https://img.icons8.com/?size=100&id=70533&format=png&color=000000",
  },
  {
    id: 6,
    name: "Asana",
    img: "https://img.icons8.com/?size=100&id=KXLQJEcoy0Yu&format=png&color=000000",
  },
  {
    id: 7,
    name: "Trello",
    img: "https://img.icons8.com/color/48/000000/trello.png",
  },
  {
    id: 8,
    name: "GitHub",
    img: "https://img.icons8.com/material-outlined/48/000000/github.png",
  },
  {
    id: 9,
    name: "GitLab",
    img: "https://img.icons8.com/color/48/000000/gitlab.png",
  },
  {
    id: 10,
    name: "Jira",
    img: "https://img.icons8.com/color/48/000000/jira.png",
  },
  {
    id: 11,
    name: "Stripe",
    img: "https://img.icons8.com/color/48/000000/stripe.png",
  },
  {
    id: 12,
    name: "Zapier",
    img: "https://img.icons8.com/?size=100&id=aeA0JLcQ9Wic&format=png&color=000000",
  },
  {
    id: 13,
    name: "Google Workspace",
    img: "https://img.icons8.com/?size=100&id=ya4CrqO7PgnY&format=png&color=000000",
  },
];

const Clients = () => {
  return (
    <section id="integrations" className="py-20">
      <h1 className="heading">
        Integrate with
        <span className="text-purple"> top apps & services</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Moving Carousel of App Icons */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={integrations.map((integration) => ({
              icon: integration.img,
              name: integration.name,
            }))}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Static List of App Icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex md:max-w-60 max-w-32 gap-2"
            >
              <img
                src={integration.img}
                alt={integration.name}
                className="md:w-10 w-5"
              />
              <span className="md:text-lg text-sm">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
