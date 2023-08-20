'use client';

import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { boardList } from '@/atom';

export default function BoardIdx(req) {
  const boardIdx = req.params.id;
  const [text, setText] = useState('');
  const [updateText, setUpdateText] = useState(false);
  const [inputText, setInputText] = useState('');
  const [list, setList] = useRecoilState(boardList);

  const UpdateRecoil = () => {
    const data = JSON.parse(JSON.stringify(list));
    data[boardIdx].content = text;
    setList(data);
    setUpdateText(false);
  };

  useEffect(() => {
    async function upDateText() {
      updateText == true
        ? setInputText(
            <input
              className="-my-8 divide-y-2 divide-white-100"
              placeholder={list[boardIdx].content}
              onChange={e => setText(e.target.value)}
            />,
          )
        : setInputText(<div className="-my-8 divide-y-2 divide-white-100">{list[boardIdx].content}</div>);
    }
    upDateText();
  }, [updateText, list]);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">{inputText}</div>
        <div className="container px-5 py-24 mx-auto">
          {updateText == true ? (
            <p onClick={UpdateRecoil}>반영하기</p>
          ) : (
            <p onClick={() => setUpdateText(true)}>수정하기</p>
          )}
        </div>
      </section>
    </>
  );
}
