"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/ui/Container";
import FormField from "@/components/form/FormField";

import { submitBooking } from "@/lib/api/bookings";
import { tourSchema } from "@/lib/validations/tourSchema";

export default function TourBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(tourSchema),
  });

  const onSubmit = async (data : any) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitBooking({
        ...data,
        bookingType: "tour",
      });

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F9F9F9] py-24">
      <Container>
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-3 text-[#1A1A1A]">
            Tour Package Booking
          </h1>

          <p className="text-gray-500 mb-8">
            Discover Rwanda with our customized tour experiences.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            {/* TOUR DETAILS */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Tour Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FormField
                  label="Destination"
                  name="destination"
                  register={register}
                  error={errors.destination}
                  as="select"
                  options={[
                    "Kigali Hub",
                    "Akagera National Park",
                    "Nyungwe National Park",
                    "Volcano National Park",
                    "Gishwati Mukura National Park",
                    "Karongi Hub",
                  ]}
                />

                <FormField
                  label="Package Type"
                  name="packageType"
                  register={register}
                  error={errors.packageType}
                  as="select"
                  options={[
                    "Gorilla Trekking",
                    "Big Five Safari",
                    "Canopy Walk Adventure",
                    "Lake Kivu Escape",
                    "Cultural Experience",
                    "Kigali City Tour",
                  ]}
                />

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Travel Date
                  </label>

                  <input
                    type="date"
                    {...register("travelDate")}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#C49A3A]"
                  />

                  {errors.travelDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.travelDate.message}
                    </p>
                  )}
                </div>

                <FormField
                  label="Travelers"
                  name="travelers"
                  register={register}
                  error={errors.travelers}
                  as="select"
                  options={[
                    "1 Traveler",
                    "2 Travelers",
                    "3 Travelers",
                    "4 Travelers",
                    "5+ Travelers",
                  ]}
                />
              </div>
            </div>

            {/* CUSTOMER INFORMATION */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Customer Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FormField
                  label="First Name"
                  name="firstName"
                  register={register}
                  error={errors.firstName}
                  placeholder="First Name"
                />

                <FormField
                  label="Last Name"
                  name="lastName"
                  register={register}
                  error={errors.lastName}
                  placeholder="Last Name"
                />

                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  register={register}
                  error={errors.email}
                  placeholder="Email Address"
                />

                <FormField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  register={register}
                  error={errors.phone}
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* SPECIAL REQUESTS */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Special Requests
              </h2>

              <FormField
                label="Special Requests"
                name="requests"
                register={register}
                error={errors.requests}
                as="textarea"
                placeholder="Any special requirements"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#b68a2f] transition
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing Booking...
                </span>
              ) : (
                "Book Tour"
              )}
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {submitStatus === "success" && (
            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-semibold">
                ✓ Booking request sent successfully
              </p>

              <p className="text-green-600 text-sm mt-1">
                Our travel team will contact you within 24 hours.
              </p>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {submitStatus === "error" && (
            <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-semibold">
                Booking failed
              </p>

              <p className="text-red-600 text-sm">
                Please try again or contact support.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}