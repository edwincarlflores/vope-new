import { SVGAttributes } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Topic } from "@/services/topic.service";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <>
      <Card className="w-full max-w-3xl">
        <CardHeader className="flex items-center justify-between p-4 pb-2">
          <CardTitle>{topic.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <TrophyIcon className="w-5 h-5" />
            Top Players
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">Rank</TableHead>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topic.items.map((item, idx) => (
                <TableRow>
                  <TableCell className="font-medium text-primary">
                    {idx + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <img src="/placeholder.svg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    12,345
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

export function Component() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex items-center justify-between p-4 pb-2">
        <CardTitle>Leaderboard</CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <TrophyIcon className="w-5 h-5" />
          Top Players
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Rank</TableHead>
              <TableHead>Username</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-primary">1</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <img src="/placeholder.svg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>shadcn</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">12,345</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-primary">2</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <img src="/placeholder.svg" alt="@jaredpalmer" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <span>jaredpalmer</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">11,234</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-primary">3</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <img src="/placeholder.svg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <span>maxleiter</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">10,987</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-primary">4</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <img src="/placeholder.svg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <span>shuding_</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">10,123</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-primary">5</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <img src="/placeholder.svg" alt="@acme" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <span>acme</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">9,876</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function TrophyIcon(props: SVGAttributes<SVGElement>) {
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
