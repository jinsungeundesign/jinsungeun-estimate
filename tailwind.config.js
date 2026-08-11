/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // 기기마다 기본 글꼴이 달라 화면이 제각각으로 보이던 문제를 막기 위해 Pretendard로 고정한다.
      // 뒤의 목록은 폰트를 내려받기 전이나 실패했을 때만 쓰이는 대체 글꼴이다.
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        mono: [
          "Pretendard Variable",
          "Pretendard",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
