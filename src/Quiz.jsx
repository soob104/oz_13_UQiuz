import { Link, useLocation, useParams } from "react-router-dom";

export default function Quiz() {
  const { nickname } = useParams();
  const { state } = useLocation();
  const displayName = state?.nickname ?? decodeURIComponent(nickname ?? "");

  return (
    <section className="min-h-screen bg-gray-100 grid place-items-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-10 shadow-[0_12px_28px_rgba(0,0,0,0.08)] space-y-6">
        <h2 className="text-2xl font-bold text-center">
          안녕하세요, <span className="text-blue-500">{displayName}</span>님!
        </h2>
        <p className="text-gray-600 text-center">여기가 퀴즈 화면입니다.</p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-block rounded-lg px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            홈으로
          </Link>
        </div>
      </div>
    </section>
  );
}
