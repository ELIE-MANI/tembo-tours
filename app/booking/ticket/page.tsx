"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/ui/Container";
import FormField from "@/components/form/FormField";

import { ticketSchema, TicketFormData } from "@/lib/validations/ticketSchema";
import { submitBooking } from "@/lib/api/bookings";

export default function TicketBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = async (data: TicketFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitBooking({
        ...data,
        bookingType: "ticket",
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

          <h1 className="heading-font text-3xl font-bold mb-3">
            Ticket Booking
          </h1>

          <p className="text-gray-500 mb-8">
            Book flights and travel tickets with us.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Travel Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <FormField
                  label="Departure City"
                  name="departureCity"
                  register={register}
                  error={errors.departureCity}
                />

                <FormField
                  label="Destination"
                  name="destination"
                  register={register}
                  error={errors.destination}
                />

                <div>
                  <label className="block mb-2">
                    Travel Date
                  </label>

                  <input
                    type="date"
                    {...register("travelDate")}
                    className="w-full border rounded-xl p-3"
                  />

                  {errors.travelDate && (
                    <p className="text-red-500 text-sm">
                      {errors.travelDate.message}
                    </p>
                  )}
                </div>

               <FormField
              label="Passengers"
              name="passengers"
              register={register}
              error={errors.passengers}
              type="number"
              placeholder="Enter number of passengers"
            />

              </div>

              <div className="flex items-center gap-3 mt-6">

                <input
                  type="checkbox"
                  {...register("returnTrip")}
                />

                <label>
                  Return Trip
                </label>

              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Passenger Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <FormField
                  label="First Name"
                  name="firstName"
                  register={register}
                  error={errors.firstName}
                />

                <FormField
                  label="Last Name"
                  name="lastName"
                  register={register}
                  error={errors.lastName}
                />

                <FormField
                  label="Email"
                  name="email"
                  register={register}
                  error={errors.email}
                />

                <FormField
                  label="Phone"
                  name="phone"
                  register={register}
                  error={errors.phone}
                />

              </div>
            </div>

            <FormField
              label="Special Requests"
              name="requests"
              register={register}
              error={errors.requests}
              as="textarea"
            />

            <button
              disabled={isSubmitting}
              className="w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold"
            >
              {isSubmitting ? "Processing..." : "Book Ticket"}
            </button>

          </form>
        </div>
      </Container>
    </section>
  );
}