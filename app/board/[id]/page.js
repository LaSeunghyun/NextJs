'use client'

import React, { useState, useMemo, useEffect } from "react";

async function getBoardData(req) {

    const pageIdx = req;

    const option = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`/api/board/board?id=${pageIdx}`, option);
    const data = await response.json();
    return data;
}

export default function BoardIdx({ params }) {

    const boardIdx = params.id

    const [boardData, setBoardData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getBoardData(boardIdx);
            setBoardData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">{boardData.content}</div>
                </div>
            </section>
        </>
    );
}