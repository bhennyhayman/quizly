import { NextResponse } from 'next/server';
import generateQuestions from '@/services/generateQuestions';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get('topic');
    const level = searchParams.get('level');

    const questions = await generateQuestions(topic, level);
    return NextResponse.json(questions);
    
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}