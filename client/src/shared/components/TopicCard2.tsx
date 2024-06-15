import { SVGAttributes } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Topic } from "@/services/topic.service";

interface TopicCardProps {
  topic: Topic;
}

function convertNumberToRank(num: number) {
  // Special cases: 11, 12, 13
  const numStr = num.toString();
  switch (true) {
    case numStr === "11":
    case numStr === "12":
    case numStr === "13":
      return numStr + "th";
    case numStr.endsWith("1"):
      return numStr + "st";
    case numStr.endsWith("2"):
      return numStr + "nd";
    case numStr.endsWith("3"):
      return numStr + "rd";
    default:
      return numStr + "th";
  }
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{topic.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {topic.items
              .filter((_, idx) => idx < 3)
              .map((item, index) => (
                <div
                  key={item.name + item.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-lg">
                      {convertNumberToRank(index + 1)}
                    </div>
                    <div>
                      <img
                        src={
                          item.image
                            ? item.image
                            : "https://via.placeholder.com/48"
                        }
                        alt="User Avatar"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      {item.description ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="max-w-[190px] text-gray-500 dark:text-gray-400">
                                <p className="line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p className="max-w-[500px]">
                                {item.description}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : null}
                    </div>
                  </div>
                  <Badge>+100</Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export function Component() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg">1st</div>
              <div className="flex-1">
                <div className="font-medium">John Doe</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Score: 1000
                </div>
              </div>
            </div>
            <Badge>+100</Badge>
          </div>
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg">2nd</div>
              <div className="flex-1">
                <div className="font-medium">Jane Smith</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Score: 950
                </div>
              </div>
            </div>
            <Badge>+80</Badge>
          </div>
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg">3rd</div>
              <div className="flex-1">
                <div className="font-medium">Bob Johnson</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Score: 900
                </div>
              </div>
            </div>
            <Badge>+75</Badge>
          </div>
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg">4th</div>
              <div className="flex-1">
                <div className="font-medium">Sarah Lee</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Score: 850
                </div>
              </div>
            </div>
            <Badge>+70</Badge>
          </div>
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg">5th</div>
              <div className="flex-1">
                <div className="font-medium">Michael Chen</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Score: 800
                </div>
              </div>
            </div>
            <Badge>+65</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TrophyIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
