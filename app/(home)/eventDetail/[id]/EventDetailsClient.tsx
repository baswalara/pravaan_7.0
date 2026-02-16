"use client";

import { motion } from "framer-motion";
import {
  ScrollText,
  Calendar,
  MapPin,
  User,
  BadgeIndianRupee,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  spellCategory: string;
  Fee: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl: string;
}

const EventInfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 text-gold">
    <Icon size={20} />
    <span className="font-semibold">{label}:</span>
    <span className="text-white">{value}</span>
  </div>
);

const RegisterButton = () => (
  <button className="bg-white hover:bg-amber-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
    Join this Magical Event
  </button>
);

const EventDetailsClient = ({ event }: { event: EventDetail }) => {
  return (
    <>
      <Navbar />
      <FloatingNav namex="P" className="max-md:hidden" />

      <motion.div
        className="mx-auto z-10 shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-[60%] flex flex-col items-center gap-10 glass rounded-lg p-10">
            <h1 className="text-5xl font-serif text-white">
              {event.title}
            </h1>

            <div className="flex gap-10 w-full">
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/2 flex flex-col gap-8">
                <div className="glass p-6 rounded-lg space-y-3">
                  <EventInfoItem icon={Calendar} label="Date" value={event.date} />
                  <EventInfoItem icon={MapPin} label="Location" value={event.location} />
                  <EventInfoItem icon={User} label="Organizer" value={event.organizer} />
                  <EventInfoItem icon={BadgeIndianRupee} label="Fee" value={event.Fee} />
                </div>

                <div className="glass p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ScrollText size={18} className="text-gold" />
                    <h3 className="font-bold text-white">Event Description</h3>
                  </div>
                  <p className="text-gold">{event.description}</p>
                </div>

                <RegisterButton />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default EventDetailsClient;
