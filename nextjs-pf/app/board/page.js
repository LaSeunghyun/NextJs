import Link from "next/link"

export default function Board(){

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    const dateTime = year + ' / ' + month + ' / ' + day

    const text = [
            {
                "idx" : 0, "name" : "제목" , "content" : "내용", "regdate" : dateTime, "category" : "잡담"
            },
            {
                "idx" : 1, "name" : "제목2" , "content" : "내용2", "regdate" : dateTime, "category" : "자유게시판"
            }
        ]
        
    return(
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {
                            text.reverse().map((item, i) => {
                                return(
                                <div className="py-8 flex flex-wrap md:flex-nowrap" key={item.idx}>
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700">{item.category}</span>
                                        <span className="mt-1 text-gray-500 text-sm">{item.regdate}</span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.name}</h2>
                                        <p className="leading-relaxed">{item.content}</p>
                                        <Link className="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}