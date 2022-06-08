import { FC } from "react";

type obj = {
  name: string;
  age?: number;
  check: boolean;
};

export const Lesson = (props: obj) => {
  return (
    <div className="text-center mb-2">
      <h1>ぺんぺんするユーザー</h1>
      <h2>
        {props.name}、{props.age ? `props.{age}歳、` : null}
        {props.check ? "本人認証済み" : "認証前ユーザー"}
      </h2>
    </div>
  );
};
