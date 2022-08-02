const topics = ReactDOM.createRoot(
    document.querySelector("#buttons")
);

function topic(name, image, href) {
    return (
        <div className="button_container">
            <a href={href}>
                <button className="button">
                    <img className="button_icon" src={"assets/images/" + image + ".png"} alt="icon"/>
                    <p className="button_text center">&nbsp;&nbsp;&nbsp;{name}</p>
                </button>
            </a>
            <div className="button_back"></div>
        </div>
    );
}

const topics_map = [
    ["Immigrazione", "passport", "#topic_immigrazione"],
    ["Ambiente", "environment", "#topic_immigrazione"],
    ["Diritti", "protest", "#topic_immigrazione"],
    ["Economia", "cash", "#topic_immigrazione"],
    ["Politica interna", "home", "#topic_immigrazione"],
    ["Droghe leggere", "pills", "#topic_immigrazione"],
    ["Politica estera", "travelling", "#topic_immigrazione"],
    ["Pandemia", "vaccine", "#topic_immigrazione"],
    ["Altro", "more", "#topic_immigrazione"]
];

//topics.render(topics_map.map((e) => topic(e[0], e[1], e[2])))