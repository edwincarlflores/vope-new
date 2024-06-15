import type { Topic } from "@/services/topic.service";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mx-auto max-w-sm mt-16">
      <h2 className="text-xl font-semibold mb-4">{topic.title}</h2>
      <ul>
        {topic.items
          .filter((_, idx) => idx < 3)
          .map((item, idx) => (
            <li className="flex items-center justify-between py-2 border-b border-gray-300">
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-4">{idx + 1}</span>
                <img
                  src="https://via.placeholder.com/48"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-4"
                />
                <span className="text-gray-800 font-semibold">{item.name}</span>
              </div>
              <span className="text-green-500 font-semibold">1000 Points</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
