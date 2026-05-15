export type SupplementVerdict = "Legit" | "Partial" | "Skip";

export interface Supplement {
  id: number;
  name: string;
  verdict: SupplementVerdict;
  broMyth: string;
  reality: string;
  hasAmazonLink: boolean;
}

export const supplements: Supplement[] = [
  {
    id: 1,
    name: "Creatine Monohydrate",
    verdict: "Legit",
    broMyth: "It'll make you bloated and damage your kidneys",
    reality:
      "One of the most researched supplements ever. Genuinely works for strength and muscle. Buy plain monohydrate.",
    hasAmazonLink: true,
  },
  {
    id: 2,
    name: "Whey Protein",
    verdict: "Legit",
    broMyth: "You need 3 scoops a day or your gains disappear",
    reality:
      "Convenient way to hit protein targets. No magic — just food in powder form.",
    hasAmazonLink: true,
  },
  {
    id: 3,
    name: "Pre-workout",
    verdict: "Partial",
    broMyth: "Turns you into a superhuman for 2 hours",
    reality:
      "Mostly caffeine with expensive packaging. A black coffee does 80% of the job.",
    hasAmazonLink: true,
  },
  {
    id: 4,
    name: "BCAAs",
    verdict: "Skip",
    broMyth: "Essential for muscle preservation",
    reality:
      "If you eat enough protein you already get all the BCAAs you need. Save your money.",
    hasAmazonLink: false,
  },
  {
    id: 5,
    name: "Fat Burners",
    verdict: "Skip",
    broMyth: "Melts fat while you sleep",
    reality:
      "Almost entirely marketing. Usually just high-dose caffeine in a flashy bottle.",
    hasAmazonLink: false,
  },
  {
    id: 6,
    name: "Magnesium",
    verdict: "Legit",
    broMyth: "Only old people need this",
    reality:
      "Most people are deficient. Helps sleep, recovery and muscle function. Get glycinate form.",
    hasAmazonLink: true,
  },
  {
    id: 7,
    name: "Vitamin D",
    verdict: "Legit",
    broMyth: "Just go outside more",
    reality:
      "Most people are deficient regardless of sun exposure. Supports immunity, mood and hormones.",
    hasAmazonLink: true,
  },
  {
    id: 8,
    name: "Collagen",
    verdict: "Partial",
    broMyth: "Better than whey for gains",
    reality:
      "Great for joints and tendons, limited muscle-building benefit. Worth it if joints are an issue.",
    hasAmazonLink: true,
  },
];
