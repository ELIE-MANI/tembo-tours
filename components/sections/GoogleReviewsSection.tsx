import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CTX_t4auy7GUECE/review";

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#F5F5F2] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[5px] text-[#D4A017]">
            Google Reviews
          </p>

          <h2 className="heading-font text-4xl font-bold leading-tight text-[#0B3D1F] md:text-5xl">
            What Our Travelers Say
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#D4A017]" />

          <p className="mt-7 text-lg leading-relaxed text-gray-600">
            Your experience matters to us. As we welcome travelers from
            Rwanda and around the world, we invite you to share your
            experience with Tembo Travels on Google.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A017]/10">
              <Star
                size={30}
                className="fill-[#D4A017] text-[#D4A017]"
              />
            </div>

            <h3 className="heading-font mt-6 text-2xl font-bold text-[#0B3D1F] md:text-3xl">
              Share Your Experience
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
              Have you traveled with Tembo Travels? We would love to hear
              about your experience. Your feedback helps us improve and
              helps future travelers discover our services.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3D1F] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#092f18] hover:shadow-lg"
              >
                Leave a Google Review
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#0B3D1F] px-7 py-3.5 font-semibold text-[#0B3D1F] transition-all duration-300 hover:bg-[#0B3D1F] hover:text-white"
              >
                View on Google
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Reviews are hosted and managed by Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}