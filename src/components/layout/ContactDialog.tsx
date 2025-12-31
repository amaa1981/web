"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Button } from "@/components/ui";
import { XMarkIcon, CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT!;

export default function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [phone, setPhone] = useState<string | undefined>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = form["first-name"].value.trim();
    const lastName = form["last-name"].value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors: Record<string, string> = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email.";
    if (!phone) newErrors.phone = "Phone number is required.";
    else if (!isValidPhoneNumber(phone))
      newErrors.phone = "Invalid phone number.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname: firstName,
          lname: lastName,
          email,
          phone: phone?.replace("+", "00"),
          message,
        }),
      });
      if (res.ok) {
        form.reset();
        setPhone(undefined);
        setStatus("sent");
      } else {
        console.error("API error", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
    } 
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/75" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg rounded-lg bg-white p-6 text-left shadow-xl">
                {/* Close button */}
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full bg-gray-100 p-1 text-gray-600 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#13787F]"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Us
                </Dialog.Title>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium">
                        First name
                      </label>
                      <input
                        name="first-name"
                        className={`w-full rounded-md border px-3 py-2 ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Last name
                      </label>
                      <input
                        name="last-name"
                        className={`w-full rounded-md border px-3 py-2 ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      className={`w-full rounded-md border px-3 py-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <PhoneInput
                      international
                      defaultCountry="SA"
                      value={phone}
                      onChange={setPhone}
                      className={`w-full rounded-md border px-3 py-2 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className={`w-full rounded-md border px-3 py-2 ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* Sending Modal */}
      <Transition appear show={status === "sending"} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/75" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-xl">
                <div className="flex flex-col items-center">
                  <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-[#13787F] border-gray-200" />
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    Sending your message...
                  </Dialog.Title>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Success / Error Modal */}
      <Transition
        appear
        show={status === "sent" || status === "error"}
        as={Fragment}
      >
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/75" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-xl">
                <div className="flex flex-col items-center">
                  {status === "sent" && (
                    <>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                        <CheckIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <Dialog.Title className="text-lg font-semibold text-gray-900">
                        Message sent!
                      </Dialog.Title>
                      <p className="text-sm text-gray-500">
                        We'll get back to you shortly.
                      </p>
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                        <XCircleIcon className="h-6 w-6 text-red-600" />
                      </div>
                      <Dialog.Title className="text-lg font-semibold text-gray-900">
                        Something went wrong!
                      </Dialog.Title>
                      <p className="text-sm text-gray-500">
                        Please try again later.
                      </p>
                    </>
                  )}
                  <button
                    onClick={() => {
    setStatus("idle"); 
    onClose();         
  }}
  className="mt-5 w-full rounded-md bg-[#29928F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#13787F]"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
