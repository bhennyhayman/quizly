"use client"
import { useQuizStore } from "@/store/quizStore";
import { GiPartyPopper } from "react-icons/gi";
import Link from "next/link";

export default function ScorePage() {
  const { data, answers } = useQuizStore();
  let score = 0;

  function calculateScore(){
    
    for(let i = 0; i < answers.length; i++){
      if(answers[i] == data[i].rightAnswer){
        score ++;
      }
    }
  }
  calculateScore();

  function grade(score: number){
    if(score == 10){
      return "Excellent"
    }else if(score >= 8 ){
      return "You did great"
    }else if(score >= 5){
      return "You did well"}
    else{
      return "You can do better"
    }}
 

  return (
    <div>
      <h1 className="text-center my-5 text-[20px]">Results</h1>

      <div className="flex items-center text-2xl gap-5 justify-center"><span className="text-fuchsia-800">Completed Quiz</span> <GiPartyPopper size={30}/></div>

      <div className="flex flex-col justify-self-center shadow-2xl py-5 m-5 px-7 text-2xl text-center">
        <div className="my-2 text-4xl text-green-600">Score: {score}/{data.length}</div>
        <div className="text-[18px ]">{grade(score)}</div>
      </div>
      
      <div>
        <button className="block w-fit mx-auto bg-cyan-600 text-white py-2 px-3 my-2 rounded"><Link href={"/results"}>View results</Link> </button>
        <button className="block w-fit mx-auto bg-cyan-900 text-white py-2 px-3 my-5 rounded"><Link href={"/start"}>Start new quiz</Link> </button>
      </div>
    </div>
  );
}
