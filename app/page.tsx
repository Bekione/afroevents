"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2024-07-03T14:00:00").getTime(); // Convert to timestamp

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-xl"
          prefetch={false}
        >
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Afro Events Logo"
          />
          Afro Events
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center  py-24 px-4 md:px-6 flex flex-col items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              DBU Hangout Night Party
            </h1>
            <p className="text-lg">
              Join us for a night of music, dancing, games and unforgettable
              memories at the DBU Hangout Night Party.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">{countdown.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">{countdown.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">{countdown.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">{countdown.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="mb-8">
                <h2 className="text-4xl font-extrabold mb-6">Event Details</h2>
                <div className="prose text-muted-foreground space-y-6">
                  <p className="leading-relaxed">
                    The DBU Hangout Night Party is a must-attend event for
                    anyone looking to experience the vibrant Afro-centric
                    culture and music scene. Hosted by{" "}
                    <span className="font-bold text-[#00BF63]">
                      Afro Events
                    </span>
                    , this party promises a night of unforgettable
                    entertainment, fun games, and endless dancing.
                  </p>
                  <p className="leading-relaxed">
                    Held at the JANO Bar, previously known as 'Amen Kurt House',
                    the party will feature a lineup of talented DJs showcasing
                    the best of Afrobeats, Highlife, and other African-inspired
                    genres. Guests can expect to be immersed in a lively
                    atmosphere, complete with stunning decor and lighting that
                    will transport them to the heart of the elite.
                  </p>
                  <p className="leading-relaxed">
                    Don't miss your chance to be a part of this incredible
                    celebration ending the year. Grab your tickets now and get
                    ready to dance the night away!
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mt-8">
                  <Link
                    href="https://t.me/afro_events_et"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Buy Tickets
                  </Link>
                </div>
              </div>

              <div>
                <Image
                  src="/Afro Events DBU event banner.png"
                  alt="Event Flyer"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-5 lg:gap-12">
            {/* Date */}
            <div className="flex items-center gap-4">
              <CalendarIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="text-lg font-medium">Date</p>
                <p className="text-muted-foreground">July 3, 2024</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4">
              <ClockIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="text-lg font-medium">Time</p>
                <p className="text-muted-foreground">8:00 PM - 12:00 AM</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="text-lg font-medium">Location</p>
                <p className="text-muted-foreground">
                  Jano Bar, around Zereyakob Bldg. Debre Berhan
                </p>
              </div>
            </div>

            {/* Admission */}
            <div className="flex items-center gap-4">
              <DollarSignIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="text-lg font-medium">Admission</p>
                <p className="text-muted-foreground">$200 per person</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="text-lg font-medium">Contact</p>
                <p className="text-muted-foreground">+251 94 609 1356</p>
                <p className="text-muted-foreground">+251 90 438 9279</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Sponsors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Link
                href="#"
                className="flex flex-col items-center justify-center"
                prefetch={false}
              >
                <Image
                  src="/dashen.png"
                  alt="Sponsor 1"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <div className="mt-2 text-center text-sm font-medium">
                  Dashen Brewery
                </div>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center justify-center"
                prefetch={false}
              >
                <Image
                  src="/sirak.png"
                  alt="Sponsor 2"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <div className="mt-2 text-center text-sm font-medium">
                  Photo Sirak
                </div>
              </Link>

              <Link
                href="#"
                className="flex flex-col items-center justify-center"
                prefetch={false}
              >
                <Image
                  src="/logo.png"
                  alt="Sponsor 4"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
                <div className="mt-2 text-center text-sm font-medium">
                  Afro Events
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Afro Events Logo"
            />
            <span className="font-bold text-xl">Afro Events</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Afro Events. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
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

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
      width="30"
      height="30"
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

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
