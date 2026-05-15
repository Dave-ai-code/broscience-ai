export type Verdict = "Debunked" | "Partial" | "Legit";

export interface Myth {
  id: number;
  question: string;
  verdict: Verdict;
  answer: string;
  source: string;
}

export const myths: Myth[] = [
  {
    id: 1,
    question: "Does cardio kill your gains?",
    verdict: "Debunked",
    answer:
      "Cardio and muscle growth coexist when programmed correctly. Volume and recovery matter more.",
    source: "J Strength Cond Res, 2022",
  },
  {
    id: 2,
    question: "Is creatine bad for your kidneys?",
    verdict: "Debunked",
    answer:
      "Decades of research show creatine is safe for healthy people. Your kidneys handle it fine.",
    source: "ISSN Position Stand, 2021",
  },
  {
    id: 3,
    question: "Should you eat protein within 30 minutes of training?",
    verdict: "Partial",
    answer:
      "The window is a few hours, not 30 minutes. Total daily intake matters most.",
    source: "Nutrients Journal, 2020",
  },
  {
    id: 4,
    question: "Does lifting make women bulky?",
    verdict: "Debunked",
    answer:
      "Women don't produce enough testosterone to bulk easily. Lifting makes you lean and strong.",
    source: "Sports Med, 2021",
  },
  {
    id: 5,
    question: "Can you spot-reduce belly fat?",
    verdict: "Debunked",
    answer:
      "Fat loss is systemic. Crunches won't specifically burn belly fat.",
    source: "ACSM Review, 2020",
  },
  {
    id: 6,
    question: "Is fasted cardio better for fat loss?",
    verdict: "Partial",
    answer:
      "You burn more fat during the session but total daily fat loss evens out. Consistency wins.",
    source: "J Int Soc Sports Nutr, 2021",
  },
  {
    id: 7,
    question: "Do you need supplements to build muscle?",
    verdict: "Debunked",
    answer:
      "Whole food and a calorie surplus beats most supplements. Creatine and protein powder help but aren't essential.",
    source: "Br J Sports Med, 2022",
  },
  {
    id: 8,
    question: "Is more protein always better?",
    verdict: "Partial",
    answer:
      "After 1.6g per kg bodyweight, extra protein adds little benefit. Spread and quality matter.",
    source: "ISSN, 2022",
  },
  {
    id: 9,
    question: "Do cold showers boost testosterone?",
    verdict: "Debunked",
    answer:
      "No strong evidence they raise testosterone meaningfully. They may help recovery and alertness.",
    source: "Eur J Appl Physiol, 2021",
  },
  {
    id: 10,
    question: "Should you train to failure every set?",
    verdict: "Partial",
    answer:
      "Training near failure drives growth but going all the way increases injury risk and recovery time.",
    source: "J Strength Cond Res, 2023",
  },
  {
    id: 11,
    question: "Does muscle turn to fat if you stop training?",
    verdict: "Debunked",
    answer:
      "Muscle and fat are different tissues — one cannot convert to the other. You lose muscle and may gain fat separately.",
    source: "Sports Med, 2020",
  },
  {
    id: 12,
    question: "Is breakfast the most important meal for gains?",
    verdict: "Debunked",
    answer:
      "Meal timing matters far less than total daily intake. Skipping breakfast won't hurt your progress.",
    source: "J Nutr, 2021",
  },
];
