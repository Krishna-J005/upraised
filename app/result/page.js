"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CircularResult from '../components/Result';
export default function Result() {
    const router = useRouter();
    const paramData = useSearchParams()
    const CORRECT = paramData.get('correct');
    const INCORRECT = paramData.get('incorrect');
    const USER_SCORE = paramData.get('score');
    const MAX_SCORE = paramData.get('maxScore');
    const startQuiz = () => {
        router.push('/quiz');
    }
    return (
        <div className="h-screen flex items-end justify-center">
            <div className="w-full h-90 rounded-t-3xl  px-4 pb-4 bg-white justify-center">
                <div className='flex justify-center text-4xl pt-5'>Your Result</div>
                <div className='flex justify-center py-3'>
                    <div className='pa-8 w-90 shadow-lg rounded-full flex justify-center items-center bg-white'>
                        <CircularResult percentage={(USER_SCORE/MAX_SCORE)*100} />
                    </div>
                </div>
                <div className='flex flex-column justify-center'>
                    <div id='correct' className="bg-green-100 flex flex-start w-80 p-4 mb-3 border-2 rounded-xl text-gray-500 font-medium">
                       <div className='text-green-500 px-5'>{CORRECT}</div> Correct 
                    </div>
                </div>
                <div className='flex flex-column justify-center'>
                    <div id='incorrect' className="bg-red-100 flex flex-start w-80 p-4 mb-3 border-2 rounded-xl text-gray-500 font-medium">
                       <div className='text-red-500 px-5'>{INCORRECT}</div> Incorrect
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="w-80 rounded-3xl justify-center flex items-center px-4 py-3 text-white bg-red-500 hover:bg-red-600" onClick={startQuiz}>
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    )


}