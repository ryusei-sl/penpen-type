import { FC, useState } from "react";

export const Action: FC = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleClick = () => {
    const copiedList = [...list];
    copiedList.push(text);
    setList(copiedList);
    console.log(list);

    setText("");
    console.log(text);
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const listReset = () => {
    setList([]);
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl mb-6">
        <span className="text-blue-700 font-bold">ぺんぺん</span>
        したいことを書いてみよう
      </h1>
      <input
        className="border p-4"
        type="text"
        onChange={updateValue}
        value={text}
      />
      <button
        className=" bg-blue-700 text-white ml-4 p-4 rounded-lg"
        onClick={handleClick}
      >
        ぺんぺんしてね
      </button>
      <button
        className=" bg-blue-700 text-white ml-4 p-4 rounded-lg"
        onClick={listReset}
      >
        気がすんだ？
      </button>

      <ul>
        {list.map((item, index) =>
          item ? (
            <li key={index} className="mt-4">
              {item}をぺんぺんしたよ
            </li>
          ) : (
            <li key={index} className="mt-4">
              何もぺんぺんしてないよ？
            </li>
          )
        )}
      </ul>
    </div>
  );
};
