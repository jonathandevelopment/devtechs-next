"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "");



  if (state.succeeded) {
    return <p className="py-60 text-center text-5xl">Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-24">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
}
