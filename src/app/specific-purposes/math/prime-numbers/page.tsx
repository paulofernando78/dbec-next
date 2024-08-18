import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

export default function PrimeNumbers() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Math" />
      <div className="line-break">
        <p className="bold">What are the prime numbers?</p>
        <div>
          <p>
            Prime numbers are natural numbers greater than 1 that have no
            positive divisors other than 1 and themselves. In other words, a
            prime number can only be divided evenly by 1 and the number itself.
          </p>
        </div>
        <p>
          For example, the first few prime numbers are: 2 (the only even prime
          number), 3, 5, 7, 11, 13, 17, 19, 23, 29
        </p>
      </div>
      <p>
        These numbers have no divisors other than 1 and themselves, making them
        prime.
      </p>
    </>
  );
}
