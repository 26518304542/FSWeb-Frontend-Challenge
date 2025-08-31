// src/components/Contact.jsx
import { contactData } from "../data/data";

export default function Contact() {
  return (
    <section className="bg-white p-10 md:p-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Send me a message!</h2>
      <p className="mb-6">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a
        href={`mailto:${contactData.email}`}
        className="block font-semibold text-purple-600 mb-6"
      >
        {contactData.email}
      </a>
      <div className="flex justify-center gap-6 text-2xl text-purple-600">
        <a href={contactData.socials.twitter}></a>
        <a href={contactData.socials.github}></a>
        <a href={contactData.socials.linkedin}></a>
        <a href={contactData.socials.instagram}></a>
      </div>
    </section>
  );
}
