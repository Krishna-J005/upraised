"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CircularProgress from '../components/CircularProgress' 

export default function Home() {
    const router = useRouter();
    // const params = useSearchParams()
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(5);
    const [questions, setQuestions] = useState([]);
    const [response, setResponse] = useState({});


    const getAllQuestions = async () => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quiz`)
        let result = await resp.json();
        setTotalQuestions(result?.questions?.length);
        setQuestions(result?.questions);
    }
    const submitResponse = async (payload) => {
        try {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quiz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: payload })
            })            
            let result = await resp.json();
            router.push(`/result?correct=${result.CORRECT}&incorrect=${result.INCORRECT}&score=${result.USER_SCORE}&maxScore=${result.MAX_SCORE}`)
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
        getAllQuestions();
    }, [])


    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Handle submission logic
            let payload = Object.keys(response).map(curr =>{
                return {
                   QUESTION_ID: curr,
                   RESPONSE: response[curr]
                }
            })
            console.log('Submitting answers...', payload);
            submitResponse(payload)
            // router.push({ pathname: "/result", query: { ...result } }, '/result')
            
        }
    };

    const handleCancel = () => {
        router.push('/');
    }
    const handleRadioChange = (value, que) => {
        setResponse({...response, [que.QUESTION_ID]: value})
    };

    const handleCheckBoxChange = (isChecked, value, que) => {
        if(!response[que.QUESTION_ID]){
            setResponse({ ...response, [que.QUESTION_ID]: [value] })
        }
        else{
            if(isChecked){
                let arr = response[que.QUESTION_ID];
                arr.push(value);
                setResponse({ ...response, [que.QUESTION_ID]: arr })
            }
            else{
                let arr = response[que.QUESTION_ID].filter(curr => curr !== value);
                setResponse({ ...response, [que.QUESTION_ID]: arr })
            }
        }
    };

    return (
        <div className="h-screen flex items-end justify-center">
            <div className="w-full  rounded-t-3xl  px-4 pb-4 bg-white">
                {/* Question Number and Progress Bar */}
                <div className='flex justify-center -translate-y-8'>
                    <div className='w-28 h-28 pa-5 rounded-full flex justify-center items-center bg-white'>
                        <CircularProgress currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
                    </div>
                    
                </div>
                {
                    questions?.[currentQuestion - 1]?.QUESTION_IMG && 
                    <div className='flex justify-center'>
                        <Image
                            src={questions?.[currentQuestion-1]?.QUESTION_IMG}
                            width="200"
                            height="150"
                            alt="Question Img"
                        />
                    </div>
                }
                {/* Questions and Options */}
                <div className="flex justify-center py-3">
                    <div className='text-gray-900 text-xl pb-2 w-80'>
                        {questions?.[currentQuestion-1]?.QUESTION}
                    </div>
                </div>
                <div className="flex justify-center pb-3">
                    {questions?.[currentQuestion - 1]?.QUESTION_TYPE === 'MCQ_SINGLE' ? 
                        <div className='text-gray-600' >
                          {
                                questions?.[currentQuestion - 1]?.RESPONSE_DETAILS.map((curr,id) => (
                                <div key={id} className="w-80 p-5 mb-3 border-2 rounded-xl">
                                        <input type="radio" value={curr} onChange={(e) => handleRadioChange(e.target.value, questions?.[currentQuestion - 1])} checked={response?.[questions?.[currentQuestion - 1]?.QUESTION_ID] === curr} />
                                        <label for={curr} className="px-3 text-gray-900">{curr}</label>
                                </div>
                            ))
                          }
                        </div>
                        :
                        <div className='text-gray-600' >
                            {
                                questions?.[currentQuestion - 1]?.RESPONSE_DETAILS.map((curr, id) => (
                                    <div key={id} className="w-80 p-5 mb-3 border-2 rounded-xl">
                                        {response?.[questions?.[currentQuestion - 1]?.QUESTION_ID]?.includes(curr)}
                                        <input 
                                            type="checkbox" 
                                            value={curr} 
                                            onChange={(e) => handleCheckBoxChange(e.target.checked, e.target.value, questions?.[currentQuestion - 1])} 
                                            checked={response?.[questions?.[currentQuestion - 1]?.QUESTION_ID]?.includes(curr)}
                                        />
                                        <label for={curr} className="px-3 text-gray-900">{curr}</label>
                                    </div>
                                ))
                            }
                        </div>
                    }

                </div>

                {/* Next/Submit Buttons */}
                <div className="flex justify-center">
                    {(response?.[questions?.[currentQuestion - 1]?.QUESTION_ID] === undefined || response?.[questions?.[currentQuestion - 1]?.QUESTION_ID]?.length === 0 ) ?
                        <button
                            disabled
                            className="bg-gray-200 font-bold py-2 px-4 w-80 rounded-3xl text-gray-400"
                            
                        >
                            {currentQuestion < totalQuestions ? 'Next' : 'Submit'}
                        </button>
                        :
                        <button
                            onClick={handleNext}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 hover:outline w-80 rounded-3xl"
                        >
                            {currentQuestion < totalQuestions ? 'Next' : 'Submit'}
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}
