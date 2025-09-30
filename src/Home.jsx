import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [nick, setNick] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = nick.trim();
    if (!trimmed) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    navigate(`/quiz/${trimmed}`, { state: { nickname: trimmed } });
  };

  return (
    <main className="min-h-screen bg-gray-100 grid place-items-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white rounded-2xl p-10 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
      >
        <h1 className="text-3xl font-serif font-semibold text-center mb-8">
          UQuiz?
        </h1>

        <div className="flex justify-center">
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-40 mx-auto block rounded-lg px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 active:bg-blue-700 disabled:opacity-90 disabled:cursor-not-allowed shadow-md"
        >
          시작하기
        </button>
      </form>
    </main>
  );
}
