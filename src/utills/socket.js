import io from "socket.io-client";
import store from "../redux";
import { addNews } from "../redux/actions/newsAction";
import { addSignals, editSignalsUser } from "../redux/actions/signalAction";

const socket = io("http://localhost:5000", {origins: "*"});

export default function socketsApp (){ 
    socket.on('connection', () => {
        console.log('Conect to socket...');
    })
    socket.on("signal-created", (signal) => {
        store.dispatch(addSignals(signal));
        // console.log('Signal created' , signal);
    });
    socket.on("signal-edited", (signal) => {
        // console.log('Signal edited' , signal);
        store.dispatch(editSignalsUser(signal));
    })
    socket.on("news-created", (news) => {
        store.dispatch(addNews(news));
    })
}