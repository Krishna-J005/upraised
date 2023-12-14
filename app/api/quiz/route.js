import { NextResponse } from "next/server";
import { questions, answers } from "../../../questions";
export async function GET(request) {
    return NextResponse.json(
        { questions: questions }, { status: 200 }
    );
};

export async function POST(req) {
    // console.log(answers, questions, request);
    const request = await req.json();
    console.log(request)
    const MAX_SCORE = questions.reduce((acc, curr) => acc + curr.WEIGHT, 0);
    let USER_SCORE = 0;
    let CORRECT = 0;
    let INCORRECT = 0;
    request.response.forEach((curr, id) => {
        if (answers?.[curr.QUESTION_ID].QUESTION_TYPE === "MCQ_SINGLE") {
            if (!curr.RESPONSE) {
                // 0 Marks
                USER_SCORE += 0;
            }
            else if (curr.RESPONSE == answers?.[curr.QUESTION_ID]?.ANSWER) {
                // Full Marks
                USER_SCORE += answers?.[curr.QUESTION_ID].WEIGHT;
                CORRECT += 1;
            }
            else {
                // Negative Marking
                INCORRECT += 1;
                USER_SCORE -= 1;
            }
        }
        else if (answers?.[curr.QUESTION_ID].QUESTION_TYPE === "MCQ_MULTIPLE") {
            if (!curr.RESPONSE || curr.RESPONSE?.length == 0) {
                // 0 Marks
                USER_SCORE += 0;
            }
            else if (curr.RESPONSE?.length === answers?.[curr.QUESTION_ID]?.ANSWER?.length && curr.RESPONSE.every((val, ind) => answers?.[curr.QUESTION_ID]?.ANSWER.includes(val))) {
                //Full Marks
                USER_SCORE += answers?.[curr.QUESTION_ID].WEIGHT;
                CORRECT += 1;
            }
            else if (curr.RESPONSE?.length < answers?.[curr.QUESTION_ID]?.ANSWER?.length && curr.RESPONSE.every((val, ind) => answers?.[curr.QUESTION_ID]?.ANSWER.includes(val))) {
                // Partial Marks
                USER_SCORE += curr.RESPONSE?.length;
            }
            else {
                // Negative Marking
                INCORRECT += 1;
                USER_SCORE -= 1;
            }
        }
    })
    console.log(MAX_SCORE, USER_SCORE)
    return NextResponse.json(
        { MAX_SCORE, USER_SCORE, CORRECT, INCORRECT }, { status: 200 }
    );
};
