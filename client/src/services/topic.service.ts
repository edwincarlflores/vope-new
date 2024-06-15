import { client } from "@/lib/api";
import { queryOptions } from "@tanstack/react-query";
import type { Topic as TopicType } from "@/server/api/topic";

async function fetchAllTopics() {
  const { data, error } = await client.api.topic.all.get();

  if (error) {
    throw new Error(error.value);
  }

  return data;
}

export const topicsQuery = queryOptions({
  queryKey: ["topics", "all"],
  queryFn: fetchAllTopics,
});

export type Topic = TopicType;
