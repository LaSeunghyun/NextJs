'use client'

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

async function getBoardData() {
    const option = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

        const response = await fetch(`/api/board/`, option);
        const data = await response.json();
        return data;
}

function BoardItem({ item }) {
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap" key={item.idx}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
          {item.category}
        </span>
                <span className="mt-1 text-gray-500 text-sm">{item.regdate}</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {item.title}
                </h2>
                <p className="leading-relaxed">{item.content}</p>
                <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/board/${item.idx}`}>
                    Learn More
                    <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default function Board() {
    const [boardData, setBoardData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getBoardData();
            setBoardData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const boardItems = useMemo(() => {
        return boardData.reverse().map((item) => <BoardItem key={item.idx} item={item} />);
    }, [boardData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">{boardItems}</div>
                </div>
            </section>
        </>
    );
}