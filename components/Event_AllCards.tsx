"use client";

import React from "react";
import Card from "./Event_Card";
import { cardData } from "@/lib/utils";
import { aboutNPfont11 } from "@/lib/font.utils";

/* ========= Step 1: Interfaces ========= */

interface EventCardType {
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  price: string;
}

interface DayDataType {
  day: string;
  cards: EventCardType[];
}

/* ========= Component ========= */

function AllCards() {
  return (
    <div className="space-y-8 px-5 w-[90%] mx-auto">
      {(cardData as DayDataType[]).map((dayData, index) => (
        <div
          key={index}
          className="space-y-4 flex flex-col justify-center items-center gap-4"
        >
          {/* Day Title */}
          <h2
            className={`text-[3rem] ${aboutNPfont11.className}`}
            style={{ color: "white" }}
          >
            {dayData.day}
          </h2>

          {/* Card Container */}
          <div className="flex flex-wrap gap-8 justify-center items-center glass p-10 rounded-3xl">
            {dayData.cards.map((card, idx) => (
              <div
                key={idx}
                className="max-sm:w-full transition-transform p-8 rounded-3xl glass"
              >
                <Card
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  location={card.location}
                  price={card.price}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <br />
      <br />
      <br />
    </div>
  );
}

export default AllCards;
