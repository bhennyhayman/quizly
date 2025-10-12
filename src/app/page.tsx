import Link from "next/link";
import {MdDraw} from "react-icons/md";

export default function Home() {
  return (
        <div>
        <div className="flex justify-center my-10 text-2xl font-bold">Welcome to Boom Quiz</div>

        <div className="flex justify-center">
          <MdDraw size={50}/>
        </div>

        <div className="mx-auto border-1 border-neutral-300 rounded p-5 text-[18px] w-80 italic flex my-10 shadow-[1px_1px_5px_grey]">Answer questions from various topics eg. Mathematics, computing, science, Literature, English and many more...</div>

        <div className="flex flex-col text-[18px] font-medium mx-auto  text-center">
         <div className="my-5">Ready to text your knowledge?</div> 
         <button className="bg-blue-950 text-white py-2 w-fit px-3 mx-auto rounded"><Link href={'start'}>Click to get started</Link></button>
        </div>
        </div>
        
  );
}
