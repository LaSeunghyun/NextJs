export function GET() {

    console.log('--------------------------------------')

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    const dateTime = year + ' / ' + month + ' / ' + day;

    const text = [{
        "idx": 0,
        "title": "제목",
        "content": "내용",
        "regdate": dateTime,
        "category": "잡담"
    },{
        "idx": 1,
        "title": "타이틀",
        "content": "와 됐어?",
        "regdate": dateTime,
        "category": "성공"
    }];

    const jsonType = JSON.stringify(text)
    return new Response(jsonType);
}