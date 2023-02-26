let w2 = {
    operational: "",
    structural: "",
    "cross-cutting": "",
};

let w3 = {
    afferent: "incoming",
    efferent: "outgoing",
    "distance from main sequence": "Ma/Me + Ce/(Ce+Ca) - 1",
    LCOM: "sum1->a(m-(Aj)/m)/a",
    "static connascence": "name, type, meaning/convention, position, algorithm",
    "dynmamic connascence": "execution, timing, values, identity",
    "cyclomatic complexity": "CC = E - N + 2P",
    "fitness function": "blah",
};

let w4 = {
    "domain partitioning": "workflow approach",
    "technical partitioning":
        "presentation business service persistence database",
    "component id process": [
        "identifying initial components",
        "assign requirements to components",
        "analyze roles and responsibilities",
        "analyze architecture characteristics",
        "restructure components",
    ],
    "component design": [
        "entity trap",
        "actor/actions",
        "event storming",
        "workflow",
    ],
};

let w5 = {
    centralized: "server has data",
    distributed: "client has data",
    decentralized: "client has local data, server has shared data",
    "fallacies of distributed computing": [
        "the network is reliable",
        "latency is zero",
        "bandwidth is infinite",
        "the network is secure",
        "the topology never changes",
        "there is only one administrator",
        "transport cost is zero",
        "the network is homogeneous",
    ],
    "monolithic architecture": "",
    "distributed architecture": "",
};

let w6 = {
    layered: "for decomposing system",
    pipeline: "for passing messages",
    microkernel: "for core system and addons",
    mvc: "for interactive views",
};

let operational = {
    availability: "system up time",
    continuity: "recovery from disaster",
    performance: "stress testing, frequency of functions used",
    recoverability: "biz req, with disaster, how quick is system back online",
    "reliability/safety": "system fail safe, mission critical",
    robustness: "handle error",
    scalability: "perform as number of users increases",
};

let structural = {
    configurability: "ability for users to easily change software config",
    extensibility: "how important to plug new functionality in",
    installability: "ease of system install on all platforms",
    "leverageability/reuse":
        "leverage common components across multiple products",
    localization: "support multiple languages, currencies",
    maintainability: "how easy to apply changes and enhance system",
    portability: "does system need to run on more than one platform",
    supportability: "level of technical support, logging required to debug",
    upgradeability: "ability to upgrade from prev vers on servers and clients",
};

let crossCutting = {
    accessibility: "access for users with colorblindness or hearing loss",
    archivability: "archived to separate database",
    authentication: "security req for login",
    authorization: "security req for users access only certain functions",
    legal: "legislative constraint system operate in",
    privacy: "hide transactions from internal employees",
    security: "data encrypted on database, network comms, remote access",
    supportability: "level of technical support, logging required to debug",
    "usability/achievability":
        "ability to upgrade from prev vers on servers and clients",
};

let componentIDProcess = {
    "identifying initial components": "",
    "assign requirements to components": "",
    "analyze roles and responsibilities": "",
    "analyze architecture characteristics": "",
    "restructure components": "",
};

let componentDesign = {
    "entity trap": "",
    "actor/actions": "",
    "event storming": "",
    workflow: "",
};

let fallaciesOfDistributedComputing = {
    "the network is reliable": "",
    "latency is zero": "",
    "bandwidth is infinite": "",
    "the network is secure": "",
    "the topology never changes": "",
    "there is only one administrator": "",
    "transport cost is zero": "",
    "the network is homogeneous": "",
};

let weeks = [w2, w3, w4, w5, w6];

let lists = [
    operational,
    structural,
    crossCutting,
    componentIDProcess,
    componentDesign,
    fallaciesOfDistributedComputing,
];

let listQuestions = () => {
    let question = Math.floor(Math.random() * lists.length);
    console.log(question);
    let answer = question[Math.floor(question.length * Math.random())];

    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    questionElement.innerHTML = question;
    answerElement.innerHTML = JSON.stringify(answer);
};

let rapidQuestion = () => {
    let question = weeks[Math.floor(Math.random() * weeks.length)];
    let subQuestions = Object.keys(question);

    console.log(question);

    let subQuestion =
        subQuestions[Math.floor(subQuestions.length * Math.random())];

    let subAnswer = question[subQuestion];

    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    questionElement.innerHTML = subQuestion;
    answerElement.innerHTML = JSON.stringify(subAnswer);
};

let question = "";
let subQuestion = "";

let changeQuestion = () => {
    question = weeks[Math.floor(Math.random() * weeks.length)];
    let subQuestions = Object.keys(question);

    subQuestion = subQuestions[Math.floor(subQuestions.length * Math.random())];

    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    questionElement.innerHTML = subQuestion;
    answerElement.innerHTML = "BLANK";
};

let revealAnswer = () => {
    let subAnswer = question[subQuestion];
    const answerElement = document.getElementById("answer");
    answerElement.innerHTML = JSON.stringify(subAnswer);
};

// console.log(subQuestion);
// console.log(subAnswer);
