import React from "react";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";
import { BoardCard } from "@/components/Cards/BoardCard";

export default function Math() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Job Interviews" />
      <div className="line-break">
        <Link href="/specific-purposes/math/prime-numbers"></Link>
        <BoardCard label="Prime Numbers" bgColor="black" textColor="white">
          <p className="bold">What are the prime numbers?</p>
          <div>
            <p>
              Prime numbers are natural numbers greater than 1 that have no
              positive divisors other than 1 and themselves. In other words, a
              prime number can only be divided evenly by 1 and the number
              itself.
            </p>
          </div>
          <p>
            For example, the first few prime numbers are: 2 (the only even prime
            number), 3, 5, 7, 11, 13, 17, 19, 23, 29
          </p>
          <p>
            These numbers have no divisors other than 1 and themselves, making
            them prime.
          </p>
        </BoardCard>
        <BoardCard label="Fraction" bgColor="black" textColor="white">
          <p>
            The number on the top is called the <mark>numerator</mark>, and the number on the
            bottom is called the <mark>denominator</mark>. The numerator defines the number
            of equal parts taken, whereas the denominator defines the total
            number of equal parts in a whole. For example, 5/10 is a fraction.
            Here, 5 is a numerator and 10 is a denominator.
          </p>
        </BoardCard>
      </div>
    </>
  );
}
