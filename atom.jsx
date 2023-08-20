import { atom, selector } from "recoil";

export const boardList = atom({
    key : "boardList",
    default : [{
        "idx" : 0,
        "category" : "잡담",
        "title" : "안녕?",
        "content" : "난 test야"
    },{
        "idx" : 1,
        "category" : "잡담",
        "title" : "메롱",
        "content" : "1번이란당"
    }
]
})

export const upDateBoardList = selector({
    key : 'upDateBoardList',
    get: ({ get }) => (get(boardList)),
    set : ({ set }, newValue) => {
        console.log(newValue + " newValue<<<<<<")
        set(boardList, newValue)
    }
})