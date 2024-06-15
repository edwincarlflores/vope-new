import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { topicsQuery } from "@/services/topic.service";
import { TopicCard } from "@/components/TopicCard2";

export function HomePage() {
  const { data: topics } = useSuspenseQuery(topicsQuery);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
              Vope
            </h2>

            <p className="max-w-md text-center text-gray-400 lg:text-right">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            {topics.map((topic) => (
              <TopicCard topic={topic} key={topic.title + topic.id} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
