let w2 = {
    operational: [
        {
            term: "availability",
            def: "system up time",
        },
        {
            term: "continuity",
            def: "recovery from disaster",
        },
        {
            term: "performance",
            def: "stress testing, frequency of functions used",
        },
        {
            term: "recoverability",
            def: "biz req, with disaster, how quick is system back online",
        },
        {
            term: "reliability/safety",
            def: "system fail safe, mission critical",
        },
        {
            term: "robustness",
            def: "handle error",
        },
        {
            term: "scalability",
            def: "perform as number of users increases",
        },
    ],
    structural: [
        {
            term: "configurability",
            def: "ability for users to easily change software config",
        },
        {
            term: "extensibility",
            def: "how important to plug new functionality in",
        },
        {
            term: "installability",
            def: "ease of system install on all platforms",
        },
        {
            term: "leverageability/reuse",
            def: "leverage common components across multiple products",
        },
        {
            term: "localization",
            def: "support multiple languages, currencies",
        },
        {
            term: "maintainability",
            def: "how easy to apply changes and enhance system",
        },
        {
            term: "portability",
            def: "does system need to run on more than one platform",
        },
        {
            term: "supportability",
            def: "level of technical support, logging required to debug",
        },
        {
            term: "upgradeability",
            def: "ability to upgrade from prev vers on servers and clients",
        },
    ],
    "cross-cutting": [
        {
            term: "accessibility",
            def: "access for users with colorblindness or hearing loss",
        },
        {
            term: "archivability",
            def: "archived to separate database",
        },
        {
            term: "authentication",
            def: "security req for login",
        },
        {
            term: "authorization",
            def: "security req for users access only certain functions",
        },
        {
            term: "legal",
            def: "legislative constraint system operate in",
        },
        {
            term: "privacy",
            def: "hide transactions from internal employees",
        },
        {
            term: "security",
            def: "data encrypted on database, network comms, remote access",
        },
        {
            term: "supportability",
            def: "level of technical support, logging required to debug",
        },
        {
            term: "usability/achievability",
            def: "ability to upgrade from prev vers on servers and clients",
        },
    ],
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
    "component id process": {
        "identifying initial components": "",
        "assign requirements to components": "",
        "analyze roles and responsibilities": "",
        "analyze architecture characteristics": "",
        "restructure components": "",
    },
    "component design": {
        "entity trap": "",
        "actor/actions": "",
        "event storming": "",
        workflow: "",
    },
};

let w5 = {
    centralized: "server has data",
    distributed: "client has data",
    decentralized: "client has local data, server has shared data",
    "fallacies of distributed computing": {
        "the network is reliable": "",
        "latency is zero": "",
        "bandwidth is infinite": "",
        "the network is secure": "",
        "the topology never changes": "",
        "there is only one administrator": "",
        "transport cost is zero": "",
        "the network is homogeneous": "",
    },
    "monolithic architecture": "",
    "distributed architecture": "",
};

let w6 = {
    layered: "for decomposing system",
    pipeline: "for passing messages",
    microkernel: "for core system and addons",
    mvc: "for interactive views",
};

let weeks = [w2, w3, w4, w5, w6];

let rapidQuestion = () => {
    let question = weeks[Math.floor(Math.random() * weeks.length)];
    let subQuestions = Object.keys(question);

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
