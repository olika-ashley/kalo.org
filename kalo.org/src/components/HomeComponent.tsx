"use client"
import React, { useEffect, useState } from 'react';
import Banner from '../assets';
import SkeletonLoader from './BetLoader';
import { Event } from './BetLoader';
import Image from 'next/image';


const HomeComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://prod.events.api.betdex.com/events');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEvents(data.eventCategories.flatMap((category) =>
          category.eventGroup.flatMap((group) => group.events)
        ));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const groupEventsByCategory = (events: Event[], limit: number) => {
    const groupedEvents: { [key: string]: Event[] } = {};
    events.forEach((event) => {
      if (!groupedEvents[event.categoryTitle]) {
        groupedEvents[event.categoryTitle] = [];
      }
      if (groupedEvents[event.categoryTitle].length < limit) {
        groupedEvents[event.categoryTitle].push(event);
      }
    });
    return groupedEvents;
  };

  const groupedEvents = groupEventsByCategory(events, 10);

  return (
    <div className="bg-gray-800 p-4 rounded-md w-full">
      <div className="relative cursor-pointer min-h-[235px] rounded-[6px] flex flex-col justify-end mb-5">

        <Image
          src={Banner}
          width={200}
          height={200}
          alt=''
          className="absolute object-cover w-full h-full rounded-[6px] z-10"
        />
        <div className="relative z-50 bottom-[20px] left-[30px] font-bold">
          On Chain Social Betting, Brought to You! 
        </div>

      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          {Object.entries(groupedEvents).map(([categoryTitle, events], index) => (
            <div key={categoryTitle} className={`mb-8 ${index !== 0 ? 'mt-8' : ''}`}>
              <h2 className="text-white text-lg mb-2">{categoryTitle}</h2>
              <div className="border border-gray-700 rounded-md p-4 overflow-y-hidden">
                {events.map((event, index) => (
                  <div key={index} className="mb-2 px-5 py-3">
                    <p className="text-white">{event.eventName}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomeComponent;
