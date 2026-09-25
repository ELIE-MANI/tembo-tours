"use client";

import { guideSchema } from "@/lib/validations/guideSchema";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

const initialForm = {
  guideGender: "",
  language: "",
  destination: "",
  travelDate: "",
  travelers: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  requests: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-2 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function GuideBookingPage() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Remove the error for this field when the user starts fixing it.
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function handleGenderChange(value: string) {
    setFormData((current) => ({
      ...current,
      guideGender: value,
    }));

    setErrors((current) => ({
      ...current,
      guideGender: "",
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");
    setErrors({});

    // Validate the form with Zod.
    const result = guideSchema.safeParse(formData);

    // If validation fails, collect the errors.
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (
          typeof field === "string" &&
          !fieldErrors[field]
        ) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      setStatus("error");
      setLoading(false);

      return;
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...result.data,
          bookingType: "guide",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Booking request failed");
      }

      setStatus("success");

      setFormData(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mt-6 bg-[#FAFAF8] py-20">
      <Container>
        <div className="mx-auto max-w-4xl pt-12">

          {/* Back */}
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#0B3D1F] hover:text-[#D4A017]"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[5px] text-[#D4A017]">
              Tour Guide Service
            </p>

            <h1 className="heading-font mb-5 text-4xl font-bold text-[#0B3D1F] md:text-5xl">
              Request a Tour Guide
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Tell us about your trip and your guide preferences. Our
              team will review your request and help arrange a suitable
              guide for your experience.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* Guide preferences */}
              <section>
                <h2 className="heading-font mb-6 text-2xl font-bold text-[#0B3D1F]">
                  Guide Preferences
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                  {/* Gender */}
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-800">
                      Guide Gender
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          value: "male",
                          label: "Male",
                        },
                        {
                          value: "female",
                          label: "Female",
                        },
                        {
                          value: "no-preference",
                          label: "No Preference",
                        },
                      ].map((option) => {
                        const selected =
                          formData.guideGender ===
                          option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              handleGenderChange(
                                option.value
                              )
                            }
                            className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                              selected
                                ? "border-[#0B3D1F] bg-[#0B3D1F] text-white"
                                : errors.guideGender
                                ? "border-red-400 bg-white text-gray-700"
                                : "border-gray-200 bg-white text-gray-700 hover:border-[#0B3D1F]"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>

                    <FieldError
                      message={errors.guideGender}
                    />
                  </div>

                  {/* Language */}
                  <div>
                    <label
                      htmlFor="language"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Preferred Language
                    </label>

                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#0B3D1F]/10 ${
                        errors.language
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    >
                      <option value="">
                        Select language
                      </option>
                      <option value="English">
                        English
                      </option>
                      <option value="French">
                        French
                      </option>
                      <option value="Kinyarwanda">
                        Kinyarwanda
                      </option>
                      <option value="Swahili">
                        Swahili
                      </option>
                      <option value="Spanish">
                        Spanish
                      </option>
                      <option value="German">
                        German
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>

                    <FieldError
                      message={errors.language}
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label
                      htmlFor="destination"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Destination
                    </label>

                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Volcanoes National Park"
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.destination
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.destination}
                    />
                  </div>

                  {/* Travel date */}
                  <div>
                    <label
                      htmlFor="travelDate"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Travel Date
                    </label>

                    <input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      min={today}
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.travelDate
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.travelDate}
                    />
                  </div>

                  {/* Travelers */}
                  <div>
                    <label
                      htmlFor="travelers"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Number of Travelers
                    </label>

                    <input
                      id="travelers"
                      name="travelers"
                      type="number"
                      min="1"
                      value={formData.travelers}
                      onChange={handleChange}
                      placeholder="e.g. 2"
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.travelers
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.travelers}
                    />
                  </div>
                </div>
              </section>

              {/* Personal information */}
              <section>
                <h2 className="heading-font mb-6 text-2xl font-bold text-[#0B3D1F]">
                  Your Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.firstName
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.firstName}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.lastName
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.lastName}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.email}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250..."
                      className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#0B3D1F]"
                      }`}
                    />

                    <FieldError
                      message={errors.phone}
                    />
                  </div>
                </div>
              </section>

              {/* Additional requests */}
              <section>
                <label
                  htmlFor="requests"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Additional Requirements
                </label>

                <textarea
                  id="requests"
                  name="requests"
                  rows={5}
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Tell us anything else we should know about your guide request..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#0B3D1F] focus:ring-2 focus:ring-[#0B3D1F]/10"
                />
              </section>

              {/* Success */}
              {status === "success" && (
                <div className="flex items-start gap-3 rounded-2xl bg-green-50 p-5 text-green-800">
                  <CheckCircle2
                    className="mt-0.5 shrink-0"
                    size={22}
                  />

                  <div>
                    <p className="font-semibold">
                      Request submitted successfully.
                    </p>

                    <p className="mt-1 text-sm">
                      We have received your tour guide
                      request and will contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* API Error */}
              {status === "error" &&
                Object.keys(errors).length === 0 && (
                  <div className="rounded-2xl bg-red-50 p-5 text-sm text-red-700">
                    Something went wrong while submitting
                    your request. Please try again.
                  </div>
                )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#0B3D1F] px-6 py-4 font-semibold text-white transition hover:bg-[#082d17] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting Request..."
                  : "Request a Tour Guide"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}