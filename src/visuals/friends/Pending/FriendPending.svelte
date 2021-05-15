<script>
    import { db } from "../../../JS/firebase";
    import { fetchOther } from "../../../JS/friends";

    import signedIn from "../../../store/signedIn";

    export let friend;

    const personNotSendingRequestToHimself = (friend) => {
        friend = friend.who.split(",");
        let first = friend[0];
        let second = friend[1];

        console.table({ first, second, cond: !(first === second) });

        return !(first === second); // hassan,mohammed : true // hassan,hassan : false
    };

    const addFriend = () => {
        if (personNotSendingRequestToHimself(friend)) {
            let docId = friend.who;
            db.collection("friends")
                .doc(docId)
                .set({
                    ...friend, // same object but only change
                    state: "friends", // only change state
                });
        }
    };

    let currentSignedIn;
    $: signedIn.subscribe((lastSignedIn) => (currentSignedIn = lastSignedIn));

    // let futureFriend;
</script>

<tr>
    <td>{fetchOther(friend.who, currentSignedIn)}</td>
    <td>
        <button class="btn btn-success" on:click={addFriend}>Add Friend</button>
    </td>
</tr>
