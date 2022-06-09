import { FC, useEffect, useState } from "react";

export const Action: FC = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    loadStorage();
  }, []);

  //おもいだす
  const loadStorage = () => {
    const s = JSON.parse(localStorage.getItem("list") as string);
    s === null ? setList([]) : setList(s);
  };

  //きおくする
  const setMemory = () => {
    const copiedList = [...list];

    if (text) {
      copiedList.push(`${text}をきおくしたよ`);
      setList(copiedList);
      localStorage.setItem("list", JSON.stringify(copiedList));
    } else {
      alert("なにか書いてね");
    }
    setText("");
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  //わすれる
  const resetList = () => {
    setList([]);
    setText("");
    localStorage.removeItem("list");
  };

  const BUTTON = [
    {
      click: setMemory,
      action: "きおくする",
    },
    {
      click: resetList,
      action: "すべてわすれる",
    },
  ];

  return (
    <div className="text-center min-h-[200px] ">
      <h2 className="mb-6 text-blue-700 font-bold">
        きおくしたいことを書いてみよう
      </h2>
      <p>現在の記憶数：{list.length}</p>

      <div className="flex flex-col items-center max-w-[400px] mx-auto">
        <input
          className="border p-2 mb-2 w-3/4"
          type="text"
          onChange={updateValue}
          value={text}
        />
        <div>
          {BUTTON.map((item, index) => (
            <button
              key={index}
              className="className: bg-blue-700 text-white ml-2 p-2 rounded-lg "
              onClick={item.click}
            >
              {item.action}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="mt-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
