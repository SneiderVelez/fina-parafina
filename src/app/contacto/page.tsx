"use client";

import ContactChannels from "@/components/contact/contact-channels";
import ContactForm from "@/components/contact/contact-form";
import ContactSocial from "@/components/contact/contact-social";

export default function ContactoPage() {
  return (
    <main>
      <ContactChannels />
      <ContactForm />
      <ContactSocial />
    </main>
  );
}
