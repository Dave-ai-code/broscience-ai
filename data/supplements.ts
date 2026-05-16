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
    name: "Magnesium Glycinate",
    verdict: "Legit",
    broMyth: "Only old people and heart patients need this",
    reality:
      "Most people are deficient. Helps sleep quality, recovery, and muscle function. The glycinate form absorbs best.",
    hasAmazonLink: true,
  },
  {
    id: 7,
    name: "Vitamin D3",
    verdict: "Legit",
    broMyth: "Just go outside more",
    reality:
      "Most people are deficient regardless of sun exposure. Supports immunity, mood, and hormone production.",
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
  {
    id: 9,
    name: "Omega-3 / Fish Oil",
    verdict: "Legit",
    broMyth: "Just for old people and heart disease",
    reality:
      "Solid evidence for reducing inflammation, supporting joint health, and improving recovery. A standard protocol for serious lifters.",
    hasAmazonLink: true,
  },
  {
    id: 10,
    name: "ZMA (Zinc + Mg + B6)",
    verdict: "Partial",
    broMyth: "Boosts testosterone 10x, bro",
    reality:
      "If you're deficient in zinc the benefit is real. For everyone else the T-boost is marginal. Sleep quality improvement is genuine.",
    hasAmazonLink: true,
  },
  {
    id: 11,
    name: "Glutamine",
    verdict: "Skip",
    broMyth: "Essential for gut health and post-workout recovery",
    reality:
      "Studies show no meaningful benefit for healthy people who eat enough protein. Overhyped and overpriced.",
    hasAmazonLink: false,
  },
  {
    id: 12,
    name: "Testosterone Boosters",
    verdict: "Skip",
    broMyth: "Natural way to double your T levels",
    reality:
      "Most have no human clinical evidence. Ashwagandha is the only common ingredient with modest cortisol/stress benefits.",
    hasAmazonLink: false,
  },
];
