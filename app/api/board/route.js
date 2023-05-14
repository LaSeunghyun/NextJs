'use client'

export default function handler(req, res) {

    console.log('dddddddddddddddddddddddddddddd')
    console.log(req)
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    const dateTime = year + ' / ' + month + ' / ' + day

    const text = [
        {
            "idx": 0, "name": "제목", "content": "내용", "regdate": dateTime, "category": "잡담"
        },
        {
            "idx": 1, "name": "제목2", "content": "내용2", "regdate": dateTime, "category": "자유게시판"
        }
    ]

    return text
}