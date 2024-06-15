import { QueryClient } from "@tanstack/react-query";
import { getLoaderData } from "@/lib/api";
import { topicsQuery } from "@/services/topic.service";

export function loader(queryClient: QueryClient) {
  return async () => {
    const topics = getLoaderData(queryClient, topicsQuery);
    return topics;
  };
}
