import React from 'react';
import { eventDetails } from '@/lib/utils';
import EventDetailsClient from './EventDetailsClient';

// Types
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

// Function to get event details by ID
const getEventDetails = (id: string): EventDetail | undefined => {
  const event = eventDetails.find(event => event.title === id);

  if (event) {
    return event;
  }

  //Handle error
  return undefined;
}


// Main Component (Server Component)
const EventDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const event = getEventDetails(id);

  if (!event) {
    return <div>Event not found</div>;  //show a custom 404 page or a loading spinner
  }

  return (
    <EventDetailsClient event={event} />
  );
};


export const dynamicParams = false;

export async function generateStaticParams() {
  if (eventDetails.length === 0) {
    return [{ id: 'placeholder' }];
  }
  return eventDetails.map((event) => ({
    id: event.title,
  }));
}

export default EventDetailsPage;