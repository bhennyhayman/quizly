import { Suspense } from "react";
import QuizStart from "@/components/QuizStart";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading quiz...</div>}>
      <QuizStart />
    </Suspense>
  );
}
