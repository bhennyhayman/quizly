
"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import questions from '@/app/Data/questions';
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
  const [loading, setLoading] = useState(false);
  const topic = searchParams.get('topic'); 
  const level = searchParams.get('level');
  const [data, setData] = useState<Question[]>([]);
  const router = useRouter();
  const [answers, setAnswers] = useState<(string | number | null)[]>(() => {
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem("answers");
    return cached ? JSON.parse(cached) : [];
  }
  return [];
});
  const { setQuizData } = useQuizStore();

 useEffect(() => {

  const cached = localStorage.getItem("results");
  if (!topic || !level || cached) {
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
      
      localStorage.setItem("answers",JSON.stringify(updated));
      return updated;
    });
}

function handleSubmit(){
  if(answers.length < 1){
    return
  }
  setLoading(true);
  setQuizData(data, answers);
  const newresults = data.map(({level:_level,...data}) => data);
  localStorage.setItem("results", JSON.stringify(newresults));
  router.push("/score");
  setTimeout(()=>{
    setLoading(false);
  },3000)
}

  return (
    <div className=''>
      <p className='text-center mb-3 py-2 text-white font-bold bg-blue-950'>{topic?.toUpperCase()} - {level?.toUpperCase()}</p> 
 
      <div className=' text-center underline text-[18px]'>Choose the right answer to the questions provided</div>

      <div className='m-2'>
        {data.length > 0 && <div>{data.map((item, i)=> <div key={i} className='my-5 mx-2 p-2 shadow-[1px_1px_7px_grey]'>
          <p  className='font-semibold text-[18px]'> {i+1}. {item.question}</p>
          <ul className='cursor-pointer my-1'>
            {item.possibleSolutions.map((answer,ai)=>
            <li key={ai}
            data-qindex={i}
            data-value={answer}
            onClick={handleAnswer}
            className={`${answers[i] == answer ? "bg-blue-300": ""} my-1 mx-2 rounded px-3 border-neutral-300 border-1 py-1`}> {answer}</li>)}
          </ul>
        </div>)}</div>}
      </div>
     

      <button className='block px-5 w-fit bg-blue-950 mx-auto text-white mt-5 mb-10 rounded py-2' onClick={handleSubmit}>{loading ? "submitting...": "submit"}</button> 
    </div>
  );
}