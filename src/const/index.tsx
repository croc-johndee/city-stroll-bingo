import type { Color } from "@/types";

export const FREE_FIELD_INDEX = 12;

export const PHRASES = [
  "Excuse me, coming through!",
  "Watch out for the bike!",
  "Can you spare some change?",
  "Where’s the ___ station?",
  "Nvm, that line is too long!",
  "Hey, long time no see!",
  "oops, sorry!",
  "Great weather today, huh?",
  "Too many people around here!",
  "Let’s grab a coffee?",
  "Mind your step on the curb!",
  "What time does it open?",
  "That street performer is amazing!",
  "Hold the door, please!",
  "ohhhhh man!",
  "This traffic is driving me crazy!",
  "Boahh",
  "Careful, the floor is lava!",
  "Can you take my picture?",
  "Excuse me, can you let me loose?",
  "Can you move your car?!",
  "Don’t block the crosswalk, please!",
  "That smells amazing!",
  "Toot Toot!",
];

export const COLOR_CLASSES: Record<Color, string> = {
  green:
    "bg-green-300 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
  orange:
    "bg-orange-300 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700",
  blue: "bg-blue-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
  purple:
    "bg-purple-300 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
  red: "bg-red-300 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
};
