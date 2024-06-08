import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Component() {
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
