const headerContainer = document.getElementById("header")
const subheaderContainer = document.getElementById("subheader")
const contentsContainer = document.getElementById("contents")

const listMessage = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
]

var header = React.createElement(
    "h1",
    { id: "header"},
    "Hello Dojo!"
);

var subheader = React.createElement(
    "h2",
    { id: "subheader" },
    "Thing I need to do:"
);

var listitems1 = React.createElement(
    "li",
    null,
    "Learn React"
);

var listitems2 = React.createElement(
    "li",
    null,
    "Climb Mt. Everest"
);

var listitems3 = React.createElement(
    "li",
    null,
    "Run a marathon"
);

var listitems4 = React.createElement(
    "li",
    null,
    "Feed the dogs"
);

var contents = React.createElement(
    "ul",
    null,
    listitems1,
    listitems2,
    listitems3,
    listitems4
);

ReactDOM.render(
    header,
    headerContainer
);

ReactDOM.render(
    subheader,
    subheaderContainer
);

ReactDOM.render(
    contents,
    contentsContainer
);
