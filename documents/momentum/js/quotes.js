const quotes = [
    {
        quote: "쓰고 단 것은 외부에서 생기고 어려운 것은 내부에서 자기자신의 노력으로부터 생긴다.",
        author: "알베르트 아인슈타인"
    },
    {
        quote: "노력을 중단하는 것보다 더 위험한 것은 없다. 그것은 습관을 잃는다. 습관을 버리기는 쉬워도 얻기는 힘들다.",
        author: "빅토르 위고",
    },
    {
        quote: "가끔 실패하지 않는다면 언제나 안이하게만 산다는 증거.",
        author: "우디 앨런",
    },
    {
        quote: "결단하여 해야 할 일은 실행하겠다고 결심하라. 결심한 것은 반드시 실행하라.",
        author: "벤저민 프랭클린",
    },
    {
        quote: "다른 사람이 변하기를 바라는 것과 같이 자신을 변화시켜라.",
        author: "마하트마 간디",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;