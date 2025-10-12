"use client"
import { useQuizStore } from "@/store/quizStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


export default function ResultsPage() {
  const { data, answers } = useQuizStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  

  useEffect(()=>{
    setTimeout(()=>{
      if(data.length > 1){
        setLoading(false);
      }else{
        router.replace("/");
      }
    },3000)
    
  },[router, data.length])

  if(loading){
    return <div className="w-dvw min-h-min">
      <div className=" w-fit mx-auto mt-50 text-[18px] animate-ping dura">Please wait...</div>
      </div>
  }

  return (
    <div>
      <h1 className="text-center my-5 text-[20px]">Results</h1>

      {data.map((q, i) => (
        <div key={i} className="mx-5 shadow-2xl my-5 p-5 min-md:mx-auto min-md:w-150">
          <p className="my-1"><b>{"Q"+(i+1)}. {q.question}</b></p>
          <p className="my-1 flex gap-5 items-center">Your answer: {answers[i] || "none"} {answers[i] === q.rightAnswer ? <FaCheckCircle size={15} color="green"/>: <FaTimesCircle size={15} color="red" />}</p>
          <p className="text-green-700 font-semibold">Correct answer: {q.rightAnswer}</p>
        </div>
      ))}

      <div>
        
        <button className="block w-fit mx-auto bg-cyan-900 text-white py-2 px-3 my-5 rounded"><Link href={"/start"}>Start new quiz</Link> </button>
      </div>
    </div>
  );
}
