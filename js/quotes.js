const quotes = [
    {
    quote: "나는 노아의 법칙을 위반했다. 비를 예측하는 것은 중요하지 않지만, 방주를 만드는 것은 중요하다.",
    author: "워런 버핏",
},
{
    quote: "품질이란 우연히 만들어지는 것이 아니라, 언제나 지적 노력의 결과이다.",
    author: "존 러스킨",
},
{
    quote: "그 어떤 것에서라도 내적인 도움과 위안을 찾을 수 있다면 그것을 잡아라.",
    author: "마하트마 간디",
},
{
    quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
    author: "공자",
},
{
    quote: "작은 성실함은 위험한 것이며, 과도한 성실함은 치명적이리만큼 위험하다",
    author: "오스카 와일드",
},
{
    quote: "누구나 노틸러스 헬스기구를 보게 되면, 이 기구의 원형이 분명히 고문이 외교에 대한 합리적 대안이었던 시절에 발명되었다는 내 의견에 동의할 것이다.",
    author: "안나 퀸드랜",
},
{
    quote: "아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라. 우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.",
    author: "토마스 제퍼슨",
},
{
    quote: "인간은 오직 사고(思考)의 산물일 뿐이다. 생각하는 대로 되는 법",
    author: "마하트마 간디",
},
{
    quote: "운동은 체액을 발효시켜 적절한 통로로 보내고 그 여분을 없애며 이 신비로운 분배 과정을 통해 자연을 돕는데, 이 과정이 없다면 신체는 활력을 유지할 수 없고, 영혼은 유쾌함을 잃는다.",
    author: "조지프 애디슨",
},
{
    quote: "작은 계획을 세우지 말라; 작은 계획에는 사람의 피를 끓게할 마법의 힘이 없다... 큰 계획을 세우고, 소망을 원대히 하여 일하라.",
    author: "다니엘 H. 번햄",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;