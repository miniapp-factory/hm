"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Red",
  },
  {
    question: "Which animal do you feel most connected to?",
    options: ["Lion", "Dolphin", "Eagle", "Wolf"],
    answer: "Eagle",
  },
  {
    question: "What is your preferred type of adventure?",
    options: ["Royal ball", "Forest exploration", "Sea voyage", "Mountain climb"],
    answer: "Royal ball",
  },
  {
    question: "Which trait describes you best?",
    options: ["Kindness", "Bravery", "Curiosity", "Grace"],
    answer: "Kindness",
  },
  {
    question: "What is your favorite dessert?",
    options: ["Chocolate cake", "Apple pie", "Ice cream", "Fruit tart"],
    answer: "Apple pie",
  },
];

const princesses = [
  { name: "Snow White", minScore: 0, maxScore: 1 },
  { name: "Cinderella", minScore: 2, maxScore: 3 },
  { name: "Aurora", minScore: 4, maxScore: 5 },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOption = (option: string) => {
    if (option === questions[current].answer) {
      setScore((s) => s + 1);
    }
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setSubmitted(true);
    }
  };

  const getResult = () => {
    const result = princesses.find(
      (p) => score >= p.minScore && score <= p.maxScore
    );
    return result ? result.name : "Unknown";
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Your Disney Princess Match</h2>
        <p className="text-lg">{getResult()}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-medium mb-2">
        Question {current + 1} of {questions.length}
      </h3>
      <p className="mb-4">{questions[current].question}</p>
      <div className="flex flex-col gap-2">
        {questions[current].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleOption(opt)}
            className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
