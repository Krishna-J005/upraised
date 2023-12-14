'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const startQuiz = () => {
    router.push('/quiz');
  }
  return (
    <main className="flex h-screen flex-col items-center justify-between p-8">
      upraised
      <div className="bg-white w-60 h-60 rounded-full flex items-center justify-center text-red-500 text-4xl font-bold">
          Quiz
      </div>
      <div className="pb-2">
        <button className="w-80 rounded-3xl justify-center flex items-center px-2 py-3 text-white bg-red-500 hover:bg-red-600" onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </main>
  )
}
