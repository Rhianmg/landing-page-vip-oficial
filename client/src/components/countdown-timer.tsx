import { useState, useEffect } from "react";
import { Flame } from "lucide-react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(8 * 60 + 7); // 8 minutes and 7 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          // Reset timer when it reaches 0
          return 8 * 60 + 7;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="sticky top-0 z-50 bg-red-700/90 backdrop-blur-sm border-b border-red-500">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center space-x-3">
            <Flame className="text-yellow-400 h-6 w-6 animate-pulse" />
            <span className="text-white font-bold text-lg">ÚLTIMA CHANCE!</span>
            <div className="bg-red-800 px-3 py-1 rounded-lg border border-red-500">
              <span className="text-yellow-400 font-bold text-sm">Expira em: </span>
              <span className="text-white font-bold">{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
