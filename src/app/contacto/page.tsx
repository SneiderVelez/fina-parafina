"use client";

import ContactChannels from "@/components/contact/contact-channels";
import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import ContactSocial from "@/components/contact/contact-social";

export default function ContactoPage() {
  return (
    <main className="">
      <div className="flex flex-row items-center gap-10 mt-28">
        <ContactHero />
        <ContactChannels />
      </div>
      <ContactForm />
      <ContactSocial />
    </main>
  );
}
