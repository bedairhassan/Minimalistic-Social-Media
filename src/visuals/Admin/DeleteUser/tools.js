// import { db } from '../../../JS/firebase'

const deleteUser = (db,user) => {
    db.collection("posts").onSnapshot((snap) => {
        snap = snap.docs
            .map((snap) => snap.data())
            .filter((snap) => snap.user == user) // filter by selected user
            .map((snap) => snap.id) // fetch array of ids
            .map((doc) => db.collection("posts").doc(doc).delete());
    });

    db.collection("sign").onSnapshot((snap) => {
        snap = snap.docs
            .map((snap) => snap.data())
            .filter((snap) => snap.username == user) // filter by selected user
            .map((snap) => snap.username)
            .map((doc) => db.collection("sign").doc(doc).delete());
    });

    db.collection("whisper").onSnapshot((snap) => {
        snap = snap.docs
            .map((snap) => snap.data())
            .filter((snap) => snap.sender == user || snap.receiver == user) // filter by selected user
            .map((snap) => snap.id)
            .map((doc) => db.collection("whisper").doc(doc).delete());
    });

    db.collection("friends").onSnapshot((snap) => {
        snap = snap.docs
            .map((snap) => snap.data())
            .filter((snap) => InList(snap.who.split(","), user)) // filter by selected user
            .map((snap) => snap.who)
            .map((doc) => db.collection("friends").doc(doc).delete());
    });
};

module.exports = {
    deleteUser
}