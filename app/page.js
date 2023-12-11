import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      upraised
      <div className="bg-white w-60 h-60 rounded-full flex items-center justify-center text-red-500 text-4xl font-bold">
          Quiz
      </div>
      <div className="pb-2">
        <button  class="w-80 rounded-2xl justify-center flex items-center px-4 py-3 text-white bg-red-500 hover:bg-blue-400">
          Start Quiz
        </button>
      </div>
    </main>
  )
}
