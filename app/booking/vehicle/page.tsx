"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/ui/Container";
import FormField from "@/components/form/FormField";

import {
  vehicleSchema,
  VehicleFormData,
} from "@/lib/validations/vehicleSchema";

import { submitBooking } from "@/lib/api/bookings";

export default function VehicleBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
  });

  const onSubmit = async (data: VehicleFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitBooking({
        ...data,
        bookingType: "vehicle",
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

          <h1 className="text-3xl font-bold mb-3">
            Vehicle Rental
          </h1>

          <p className="text-gray-500 mb-8">
            Rent comfortable and luxury vehicles.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Rental Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Rental Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <FormField
                  label="Pickup Location"
                  name="pickupLocation"
                  register={register}
                  error={errors.pickupLocation}
                />

                <FormField
                  label="Vehicle Type"
                  name="vehicleType"
                  register={register}
                  error={errors.vehicleType}
                  as="select"
                  options={[
                    "Sedan",
                    "SUV",
                    "Luxury Vehicle",
                    "Minibus",
                    "4x4 Safari Vehicle",
                  ]}
                />

                <div>
                  <label className="block mb-2">
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    {...register("pickupDate")}
                    className="w-full border rounded-xl p-3"
                  />

                  {errors.pickupDate && (
                    <p className="text-red-500 text-sm">
                      {errors.pickupDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">
                    Return Date
                  </label>

                  <input
                    type="date"
                    {...register("returnDate")}
                    className="w-full border rounded-xl p-3"
                  />

                  {errors.returnDate && (
                    <p className="text-red-500 text-sm">
                      {errors.returnDate.message}
                    </p>
                  )}
                </div>

              </div>

              <div className="flex items-center gap-3 mt-6">
                <input
                  type="checkbox"
                  {...register("withDriver")}
                />

                <label>With Driver</label>
              </div>
            </div>

            {/* Customer Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Customer Information
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
                  label="Phone Number"
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
              className="w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold hover:bg-[#b68a2f]"
            >
              {isSubmitting
                ? "Processing..."
                : "Reserve Vehicle"}
            </button>

          </form>

          {submitStatus === "success" && (
            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-700 font-semibold">
                ✓ Vehicle reservation submitted successfully.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 font-semibold">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}