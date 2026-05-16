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
  {
    id: 13,
    question: "Do you need to stretch before lifting?",
    verdict: "Partial",
    answer:
      "Static stretching before lifting can reduce power output. A dynamic warm-up is better pre-session; save static stretching for after.",
    source: "J Strength Cond Res, 2021",
  },
  {
    id: 14,
    question: "Does eating fat make you fat?",
    verdict: "Debunked",
    answer:
      "Dietary fat doesn't directly cause body fat gain. A caloric surplus is the culprit. Healthy fats support hormones and joint health.",
    source: "Am J Clin Nutr, 2020",
  },
  {
    id: 15,
    question: "Is high-rep training just for toning?",
    verdict: "Debunked",
    answer:
      "\"Toning\" isn't a physiological term. High reps build muscle just like low reps — progressive overload and volume are what matter.",
    source: "J Appl Physiol, 2021",
  },
  {
    id: 16,
    question: "Will eating after 8pm cause fat gain?",
    verdict: "Debunked",
    answer:
      "Your body doesn't clock-watch. Total calories and quality over 24 hours determines fat gain, not meal timing.",
    source: "Obesity Reviews, 2022",
  },
  {
    id: 17,
    question: "Does more sweat mean a better workout?",
    verdict: "Debunked",
    answer:
      "Sweat is your body regulating temperature, not burning fat. You can sweat heavily in hot conditions with minimal effort.",
    source: "Int J Sports Med, 2020",
  },
  {
    id: 18,
    question: "Is soreness a sign of muscle growth?",
    verdict: "Partial",
    answer:
      "DOMS indicates muscle damage, not necessarily growth. You can grow without feeling sore — and soreness doesn't scale with results.",
    source: "Eur J Appl Physiol, 2022",
  },
  {
    id: 19,
    question: "Should you avoid carbs for fat loss?",
    verdict: "Partial",
    answer:
      "Carbs don't inherently cause fat gain. A caloric deficit drives fat loss regardless of macro split — low-carb works but isn't magic.",
    source: "NEJM, 2020",
  },
  {
    id: 20,
    question: "Do you need 8 hours of sleep to make gains?",
    verdict: "Legit",
    answer:
      "Sleep is when most muscle repair and hormone release happens. Chronic sleep restriction reduces testosterone, recovery, and performance.",
    source: "Sleep Medicine Reviews, 2021",
  },
];
