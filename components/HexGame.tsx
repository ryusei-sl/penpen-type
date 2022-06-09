import React, { FC, ReactEventHandler, useCallback, useState } from "react";

export const HexGame: FC = () => {
  const [quiz, setQuiz] = useState<number[]>([]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const num = [...quiz];
      num.push(Math.floor(Math.random() * 255) + 16);
      setQuiz(num);
    },
    [quiz]
  );
  return (
    <div className="text-center">
      <h2>おまけ：255以下の数字が出てくるよ</h2>
      <button className="border" onClick={handleClick}>
        問題
      </button>
      <div>
        {quiz.map((item, index) => (
          <li className="list-none" key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};
