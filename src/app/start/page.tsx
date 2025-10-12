"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Start() {

  const router = useRouter();
  const topics = ["mathematics", "english", "literature" , "science"]
  const difficulty =  ["beginner", "intermediate", "hard"];

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");

  useEffect(()=>{
    if(topic || level){
      setErr("")
    }
  },[topic, level])


  function handleTopic(e:React.MouseEvent<HTMLButtonElement>){
    setMsg(true);
   setTopic(e.currentTarget?.name)
  }
  function handleLevel(e:React.MouseEvent<HTMLButtonElement>){
   setLevel(e.currentTarget?.name)
  }

  function handleQuizStart(){
    if(!topic || !level){
      return setErr("Select a topic and a level to begin quiz")
    }
     router.push(`/quiz-start?topic=${topic}&level=${level}`)
  }


  return (
    <div className="w-dvw">
      
      <p className="text-[20px] font-mono my-2 bg-blue-900 p-2 text-white justify-center flex">Choose your preferred topic and level</p>

      {msg && <div className="flex justify-center text-green-500 font-bold text-[18px]">{`You have selected ${topic.charAt(0).toUpperCase() + topic.slice(1)} ${level ? `and ${level} level`: ""}`}</div>}
      {err && <div className="flex justify-center text-red-500 font-bold text-[18px]">{err}</div>}

      <div className="font-bold bg-blue-100 w-fit p-2 mx-5 rounded mt-5 min-md:mx-auto">Select a topic</div>
      <div className="grid grid-cols-2 min-md:grid-cols-2 min-md:w-150 min-md:mx-auto mx-3 my-1">
        {topics.map((item,i) =>
        <button onClick={handleTopic} name={item} className={`shadow-[1px_1px_5px_grey] ${item === topic ? "bg-green-600 text-white": ""} rounded mx-2 my-2 p-3`} key={i}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>)}
      </div>

      <p className="font-bold bg-blue-100 rounded w-fit p-2 mx-5 mt-5 mb-2 min-md:mx-auto">Select Level</p>
      <div className="max-sm:flex max-sm:mx-4 mx-auto grid  grid-cols-3 w-150">
        {difficulty.map((item,i) =>
        <button name={item} onClick={handleLevel}
        className={`${item === level ? "bg-green-600 text-white": ""} shadow-[1px_1px_5px_grey] rounded mx-2 my-1 p-3 min-md:mx-auto w-35`} key={i}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>)}
      </div>

     <button 
     onClick={handleQuizStart}
     className="block w-fit my-5 py-2 px-3 bg-blue-900 text-white mx-auto font-bold rounded">
      Start quiz</button>
    </div>
  );
}