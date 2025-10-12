"use client"
import { useQuizStore } from "@/store/quizStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


export default function ResultsPage() {
  const { data, answers } = useQuizStore();
  const { setQuizData } = useQuizStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(()=>{
      if(data.length < 1){
        const results = localStorage.getItem("results")
        const useranswers = localStorage.getItem("answers")
        if(results && useranswers){
        setQuizData(JSON.parse(results),JSON.parse(useranswers));
        setLoading(false);
        }else{
          router.replace("/")
        }
      }else{
        setLoading(false);
      }
    
  },[router, data.length, setQuizData])

  if(loading){
    return <div className="w-dvw min-h-min">
      <div className=" w-fit mx-auto mt-50 text-[18px] animate-ping dura">Please wait...</div>
      </div>
  }


  return (
    <div>
      <h1 className="text-center py-2 text-white text-[20px] bg-cyan-800">Results</h1>

      {data.length > 1 && data.map((q, i) => (
        <div key={i} className="mx-5 shadow-xl my-5 p-5 min-md:mx-auto min-md:w-150 rounded">
          <p className="my-1 text-[18px]"><b>{"Q"+(i+1)}. {q.question}</b></p>
          <p className="my-1 flex gap-5 items-center">Your answer: {answers[i] || "none"} {answers[i] === q.rightAnswer ? <FaCheckCircle size={15} color="green"/>: <FaTimesCircle size={15} color="red" />}</p>
          <p className="text-green-700 font-semibold">Correct answer: {q.rightAnswer}</p>
        </div>
      ))}

      <div>
        
        <button className="block w-fit mx-auto bg-cyan-900 text-white py-2 px-3 mt-5 mb-20 rounded"><Link href={"/start"}>Start new quiz</Link> </button>
      </div>
    </div>
  );
}
