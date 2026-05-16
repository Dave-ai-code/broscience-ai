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
  {
    id: 21,
    question: "Does alcohol kill your gains?",
    verdict: "Partial",
    answer:
      "Moderate occasional drinking won't erase months of work. But frequent heavy drinking impairs protein synthesis, sleep quality, and testosterone.",
    source: "Sports Med, 2021",
  },
  {
    id: 22,
    question: "Do you need to eat every 2-3 hours to stay anabolic?",
    verdict: "Debunked",
    answer:
      "Meal frequency has no meaningful effect on metabolic rate or muscle retention. Total daily protein and calories are what matter.",
    source: "J Int Soc Sports Nutr, 2020",
  },
  {
    id: 23,
    question: "Do squats damage your knees?",
    verdict: "Debunked",
    answer:
      "Properly programmed squats strengthen the muscles and connective tissue around the knee. Poor form and excessive load are the real culprits.",
    source: "Br J Sports Med, 2021",
  },
  {
    id: 24,
    question: "Is creatine loading necessary?",
    verdict: "Partial",
    answer:
      "Loading (20g/day for 5-7 days) saturates muscles faster, but 3-5g/day achieves the same result in 3-4 weeks. Both approaches work.",
    source: "ISSN, 2021",
  },
  {
    id: 25,
    question: "Will intermittent fasting boost your metabolism?",
    verdict: "Partial",
    answer:
      "IF doesn't inherently speed up metabolism. Its benefits mostly come from making calorie control easier, not any metabolic magic.",
    source: "Obesity Reviews, 2021",
  },
  {
    id: 26,
    question: "Do you need to confuse your muscles to keep growing?",
    verdict: "Debunked",
    answer:
      "\"Muscle confusion\" isn't a real mechanism. Progressive overload — consistently adding weight or reps over time — is what drives adaptation.",
    source: "J Strength Cond Res, 2022",
  },
  {
    id: 27,
    question: "Will eating too much protein damage your liver?",
    verdict: "Debunked",
    answer:
      "High protein intakes are safe for people with healthy liver function. Risk claims come from studies on those with pre-existing liver disease.",
    source: "Am J Clin Nutr, 2021",
  },
  {
    id: 28,
    question: "Is the bench press the best chest exercise?",
    verdict: "Partial",
    answer:
      "The bench press is excellent but not universally superior. Incline work, dips, and cables hit different parts of the chest and are worth adding.",
    source: "J Strength Cond Res, 2023",
  },
  {
    id: 29,
    question: "Does cardio on an empty stomach burn more fat?",
    verdict: "Partial",
    answer:
      "Fat oxidation is higher during fasted cardio but total daily fat loss equalises. Unless you enjoy training fasted, it's not necessary.",
    source: "J Int Soc Sports Nutr, 2022",
  },
  {
    id: 30,
    question: "Is red meat bad for athletic performance?",
    verdict: "Partial",
    answer:
      "Lean unprocessed red meat is a quality protein and iron source. Processed meats (sausages, deli cuts) carry real health risks — context matters.",
    source: "Nutrients, 2022",
  },
  {
    id: 31,
    question: "Does progressive overload actually drive muscle growth?",
    verdict: "Legit",
    answer:
      "Consistently increasing weight, reps, or volume over time is the primary mechanism behind hypertrophy and strength adaptation. Without it, you plateau.",
    source: "J Strength Cond Res, 2022",
  },
  {
    id: 32,
    question: "Is caffeine a proven performance enhancer?",
    verdict: "Legit",
    answer:
      "3–6 mg/kg body weight improves strength, endurance, focus, and pain tolerance. One of the most consistently supported ergogenic aids in sports science.",
    source: "Br J Sports Med, 2021",
  },
  {
    id: 33,
    question: "Do you need a calorie surplus to build muscle?",
    verdict: "Legit",
    answer:
      "You can't build significant muscle tissue without extra calories to fuel it. A modest surplus of 200–300 kcal/day is sufficient — you don't need to bulk hard.",
    source: "Am J Clin Nutr, 2021",
  },
  {
    id: 34,
    question: "Are rest days as important as training days?",
    verdict: "Legit",
    answer:
      "Muscle growth happens during recovery, not during training. Chronic underrecovery suppresses hormones, increases injury risk, and stalls progress.",
    source: "Sports Med, 2020",
  },
  {
    id: 35,
    question: "Do compound lifts outperform isolation exercises?",
    verdict: "Partial",
    answer:
      "Compounds recruit more muscle mass and drive greater systemic stimulus. But isolation work fills in gaps for lagging areas like arms, rear delts, and calves.",
    source: "J Appl Physiol, 2022",
  },
  {
    id: 36,
    question: "Does lifting with bad form to go heavier make sense?",
    verdict: "Debunked",
    answer:
      "Ego lifting with compromised technique dramatically raises injury risk and reduces target muscle activation. Mastering form first is never optional.",
    source: "J Strength Cond Res, 2021",
  },
  {
    id: 37,
    question: "Can you build muscle and lose fat at the same time?",
    verdict: "Partial",
    answer:
      "Body recomposition is real, especially for beginners and returning lifters. But it's slower than a dedicated bulk or cut — don't expect both at full speed.",
    source: "J Int Soc Sports Nutr, 2020",
  },
  {
    id: 38,
    question: "Do genetics limit how much muscle you can build?",
    verdict: "Legit",
    answer:
      "Testosterone levels, muscle fiber composition, limb length, and frame size all meaningfully cap natural muscle potential. Genetics matter — training still matters more.",
    source: "Eur J Appl Physiol, 2021",
  },
  {
    id: 39,
    question: "Should you never train the same muscle two days in a row?",
    verdict: "Partial",
    answer:
      "Most muscles recover in 48–72h. Training a muscle 2x per week is optimal for most people. Back-to-back sessions are fine if volume per session is moderate.",
    source: "J Strength Cond Res, 2022",
  },
  {
    id: 40,
    question: "Do heavy weights build muscle but light weights only tone?",
    verdict: "Debunked",
    answer:
      "\"Toning\" is muscle growth with low body fat — not a separate physiological process. Light and heavy loads both build muscle when sets are taken near failure.",
    source: "J Appl Physiol, 2021",
  },
  {
    id: 41,
    question: "Is training volume the most important factor for hypertrophy?",
    verdict: "Legit",
    answer:
      "Total weekly volume (sets × reps × load) is the strongest predictor of muscle growth across studies. More quality sets per muscle group generally means more growth.",
    source: "Br J Sports Med, 2022",
  },
  {
    id: 42,
    question: "Does the scale accurately reflect fitness progress?",
    verdict: "Debunked",
    answer:
      "Scale weight fluctuates 1–3 kg daily from water, food, and glycogen. Body composition — muscle vs fat percentage — is a far better measure of progress.",
    source: "Int J Obes, 2021",
  },
];
