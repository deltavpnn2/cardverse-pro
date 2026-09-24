import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CardVerse" },
      {
        name: "description",
        content:
          "Get in touch with the CardVerse team about the website, listings or general questions.",
      },
      { property: "og:title", content: "Contact CardVerse" },
      {
        property: "og:description",
        content:
          "Get in touch with the CardVerse team about the website, listings or general questions.",
      },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "glass mt-2 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        title="Contact CardVerse"
        subtitle="Questions about the website or a listing? Send us a message."
      />
      <section className="container-page pb-20">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 md:p-9">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className={fieldClass}
                placeholder="Your name"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={fieldClass}
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="btn-base btn-primary mt-6 w-full">
              Send Message
            </button>
            {sent && (
              <p role="status" className="mt-4 text-sm text-primary">
                Thanks — your message has been noted. This form is not yet connected to
                an inbox.
              </p>
            )}
          </form>

          <aside className="glass rounded-3xl p-7 text-sm leading-relaxed text-muted-foreground md:p-9">
            <h2 className="text-lg font-bold text-foreground">Contact information</h2>
            <p className="mt-3">
              CardVerse is an independent online project. We reply to messages sent
              through this form.
            </p>
            <p className="mt-3">
              For listing corrections, please include the card or offer name in your
              message.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
