import {App} from "./components/App";

const route = {
    path: "/",
    component: App,
    indexRoute: require("./routes/game")
}

export default route