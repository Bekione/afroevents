"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

// Define the type for the timeLeft object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Function to calculate time left until the event
const calculateTimeLeft = (): TimeLeft => {
  const eventDate = new Date('2024-06-29T20:00:00').getTime(); // Get time in milliseconds
  const now = new Date().getTime(); // Get current time in milliseconds
  const difference = eventDate - now;

  let timeLeft: TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

export default function Component() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image 
          src="/hero.jpg" 
          alt="Party Event" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              DBU GC Party Event
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Graduation Celebration
            </h1>
            <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us for a night of music, dancing, games, and unforgettable memories as we celebrate the graduation in style.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Event Details
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Don't Miss Out!</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <CalendarIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-lg font-medium">Date</p>
                  <p className="text-muted-foreground">June 29, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ClockIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-lg font-medium">Time</p>
                  <p className="text-muted-foreground">8:00 PM - 12:00 AM LTM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-lg font-medium">Location</p>
                  <p className="text-muted-foreground">Hiwot Hotel, Debre Berhan</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DollarSignIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-lg font-medium">Admission</p>
                  <p className="text-muted-foreground">$200 per person</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="https://t.me/Groots23"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Buy Tickets
              </Link>
              <Link
                href="https://t.me/Groots23"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">
                <div className="text-primary" />
              </div>
              <div className="text-lg font-medium text-muted-foreground">Time Left</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-3xl font-bold">{timeLeft.days}</p>
                <p className="text-muted-foreground">Days</p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-3xl font-bold">{timeLeft.hours}</p>
                <p className="text-muted-foreground">Hours</p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-3xl font-bold">{timeLeft.minutes}</p>
                <p className="text-muted-foreground">Minutes</p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-3xl font-bold">{timeLeft.seconds}</p>
                <p className="text-muted-foreground">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You to Our Sponsors</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We couldn't have made this event possible without the generous support of our sponsors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/dashen.png"
              width={200}
              height={100}
              alt="Sponsor Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/dashen.png"
              width={200}
              height={100}
              alt="Sponsor Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/dashen.png"
              width={200}
              height={100}
              alt="Sponsor Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
