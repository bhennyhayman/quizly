"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import questions from '../Data/questions';
import {useRouter} from 'next/navigation';
import { useQuizStore } from '@/store/quizStore';

interface Question {
  question: string;
  possibleSolutions: string[];
  rightAnswer: string;
  level: 'beginner' | 'intermediate' | 'hard';
}

export default function QuizStart() {

  const searchParams = useSearchParams();
  const [loading, setloading] = useState(false);
  const topic = searchParams.get('topic'); 
  const level = searchParams.get('level');
  const [data, setData] = useState<Question[]>([]);
  const router = useRouter();

  const [answers, setAnswers] = useState<(string | number | null)[]>([]);
  const { setQuizData } = useQuizStore();

 useEffect(() => {
  if (!topic || !level) {
    router.push("/start");
    return;
  }

  if (topic in questions) {
    const filteredData = questions[topic as keyof typeof questions].filter(
      (item) => item.level === level
    );
    setData(filteredData);
  } else {
    console.error("Invalid topic:", topic);
  }
}, [topic, level,router]);

const handleAnswer = (e: React.MouseEvent<HTMLLIElement>) => {
    const qIndex = Number(e.currentTarget.dataset.qindex); 
    const value = e.currentTarget.dataset.value; 

    if (Number.isNaN(qIndex) || value === undefined) return;

    setAnswers((prev) => {
      const updated = [...prev];
      updated[qIndex] = value;

      for (let i = 0; i < qIndex; i++) {
        if (updated[i] === undefined || updated[i] === "empty") updated[i] = null;
      }

      return updated;
    });
}

console.log(answers)


function handleSubmit(){
  if(answers.length < 1){
    return
  }
  setloading(true);
  setQuizData(data, answers);
  setloading(false);
  router.push("/score");
}

  return (
    <div className='w-dvw'>
      <p className='flex justify-center mb-3 py-2 text-white font-bold bg-blue-950'>{topic?.toUpperCase()} - {level?.toUpperCase()}</p> 

      <div className='mx-auto text-[18px] underline my-2 font-semibold w-fit '>Choose the right answer to the questions provided</div>

      <div className='questions-card'>
        {data.length > 0 ? <div>{data.map((item, i)=> <div key={i} className='shadow-[1px_1px_6px_#a3a3a3] max-sm:mx-5 mx-auto my-4 min-md:w-150 text-[18px] p-2'>
          <p  className='mx-2 mt-2'> {i+1}. {item.question}</p>
          <ul className='flex flex-col mx-5 my-2 cursor-pointer'>
            {item.possibleSolutions.map((answer,ai)=>
            <li key={ai}
            data-qindex={i}
            data-value={answer}
            onClick={handleAnswer}
            className={`${answers[i] == answer ? "bg-blue-300": ""} m-[1px] border-1 border-neutral-200 px-5 py-1`}> {answer}</li>)}
          </ul>
        </div>)}</div>: ""}
        
      </div>

      <button className='block px-5 w-fit bg-blue-950 mx-auto text-white mt-5 mb-10 rounded py-2' onClick={handleSubmit}>{loading ? "submitting...": "submit"}</button>
    </div>
  );
}