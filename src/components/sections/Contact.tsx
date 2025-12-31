"use client";

import "react-phone-number-input/style.css";
import { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Badge, Button } from "@/components/ui";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT!;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const firstName = form["first-name"].value.trim();
    const lastName = form["last-name"].value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors: typeof errors = {};

    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");
    setModalOpen(true);

    const data = {
      fname: firstName,
      lname: lastName,
      email: email,
      phone: phone ? phone.replace("+", "00") : "",
      message: message,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setStatus("sent");
        form.reset();
        setPhone(undefined);
      } else {
        const errorBody = await res.text(); // or json() depending on your API
        console.error("API error:", errorBody);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network or unexpected error:", err);
      setStatus("error");
    }
  }

  function closeModal() {
    setModalOpen(false);
    setStatus("idle");
  }

  return (
    <>
      {/* Modal */}
      <Dialog open={modalOpen} onClose={closeModal} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <DialogPanel className="relative w-full max-w-sm transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:p-6">
            <div className="text-center">
              {status === "sending" && (
                <>
                  <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-[#13787F] border-gray-200" />
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sending your message...
                  </DialogTitle>
                </>
              )}
              {status === "sent" && (
                <>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <DialogTitle
                    as="h3"
                    className="mt-3 text-base font-semibold text-gray-900"
                  >
                    Message sent successfully!
                  </DialogTitle>
                  <p className="mt-2 text-sm text-gray-500">
                    We'll get back to you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="cursor-pointer mt-5 w-full rounded-md bg-[#29928F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#13787F]"
                  >
                    Close
                  </button>
                </>
              )}
              {status === "error" && (
                <>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <XCircleIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <DialogTitle
                    as="h3"
                    className="mt-3 text-base font-semibold text-gray-900"
                  >
                    Something went wrong!
                  </DialogTitle>
                  <p className="mt-2 text-sm text-gray-500">
                    Please try again later or email us directly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="cursor-pointer mt-5 w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <section className="relative isolate bg-white" id="contact">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to modernize your IT infrastructure? Contact our
                Saudi-based team today to discuss how we can help optimize your
                operations with cutting-edge open-source solutions.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    {CONTACT_INFO.address.line1}
                    <br />
                    {CONTACT_INFO.address.line2}
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="hover:text-gray-900"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-gray-900"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 
                      outline outline-1 -outline-offset-1 
                      ${errors.firstName ? "outline-red-500" : "outline-gray-300"} 
                      focus:outline-2 focus:-outline-offset-2 focus:outline-[#13787F]`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="given-name"
                      className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 
                      outline outline-1 -outline-offset-1 
                      ${errors.lastName ? "outline-red-500" : "outline-gray-300"} 
                      focus:outline-2 focus:-outline-offset-2 focus:outline-[#13787F]`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="given-name"
                      className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 
                      outline outline-1 -outline-offset-1 
                      ${errors.email ? "outline-red-500" : "outline-gray-300"} 
                      focus:outline-2 focus:-outline-offset-2 focus:outline-[#13787F]`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <PhoneInput
                      id="phone-number"
                      international
                      defaultCountry="SA"
                      value={phone}
                      onChange={setPhone}
                      className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900
                      outline outline-1 -outline-offset-1 
                      ${errors.phone ? "outline-red-500" : "outline-gray-300"} 
                      focus:outline-2 focus:-outline-offset-2 focus:outline-[#13787F]`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-900 
                      outline outline-1 -outline-offset-1 
                      ${errors.message ? "outline-red-500" : "outline-gray-300"} 
                      focus:outline-2 focus:-outline-offset-2 focus:outline-[#13787F]`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-md bg-[#0F6264] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#13787F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#13787F]"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
