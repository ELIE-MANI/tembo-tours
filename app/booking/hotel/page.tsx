"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/ui/Container";
import FormField from "@/components/form/FormField";

import { hotelSchema } from "@/lib/validations/hotelSchema";
import { submitBooking } from "@/lib/api/bookings";

export default function HotelBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(hotelSchema),
  });

  const onSubmit = async (data: any) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitBooking({
        ...data,
        bookingType: "hotel",
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
    <section className="min-h-screen bg-[#F9F9F9] py-24 body-font">
      <Container>
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h1 className="heading-font text-3xl font-bold mb-3 text-[#1A1A1A]">
            Hotel Booking
          </h1>

          <p className="text-gray-500 mb-8">
            Reserve your stay with our travel experts.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            {/* Stay Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Stay Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-in Date
                  </label>

                  <input
                    type="date"
                    {...register("checkIn")}
                    className="w-full border border-gray-300 rounded-xl p-3"
                  />

                  {errors.checkIn && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.checkIn.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-out Date
                  </label>

                  <input
                    type="date"
                    {...register("checkOut")}
                    className="w-full border border-gray-300 rounded-xl p-3"
                  />

                  {errors.checkOut && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.checkOut.message as string}
                    </p>
                  )}
                </div>

                <FormField
                  label="Guests"
                  name="guests"
                  register={register}
                  error={errors.guests}
                  as="select"
                  options={[
                    "1 Guest",
                    "2 Guests",
                    "3 Guests",
                    "4 Guests",
                  ]}
                />

                <FormField
                  label="Room Type"
                  name="roomType"
                  register={register}
                  error={errors.roomType}
                  as="select"
                  options={[
                    "Standard Room",
                    "Deluxe Room",
                    "Suite",
                  ]}
                />

              </div>
            </div>

            {/* Guest Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Guest Information
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

            {/* Special Requests */}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {isSubmitting ? "Processing Booking..." : "Book Hotel"}
            </button>

          </form>

          {submitStatus === "success" && (
            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-700 font-semibold">
                ✓ Booking request sent successfully
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 font-semibold">
                Booking failed. Please try again.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}