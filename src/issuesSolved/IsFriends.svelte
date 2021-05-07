<!-- issue is same array of requests for each post! -->

<!-- state : {friends,pending}

I am mohammed.
I clicked on hassan's post.

[fetch state=friends] 
from following list A, fetch hassan
hassan,mohammed
mohammed,ali
mostafa,hassan

list B, fetched hassan
hassan,mohammed
mostafa,hassan

string = string.split(",")
friends = string[0]===`mohammed` || string[1]===`mohammed` -->
<script>
import { listen } from "svelte/internal";


    import { db } from "../../JS/firebase";

    let signedInUser = "mohammed";
    export let createdBy; // hassan
    let friends=false;

    const InList = (list,guest)=>{
        for (let i=0;i<list.length;i++){
            if(list[i]===guest)
            return true;
        }
    }

    const rWeFriends = who=>{

        const list = who.split(',')

        const guestInList=InList(list,signedInUser)
        const friendInList=InList(list,createdBy)

        console.table({guestInList,friendInList,who})
    }

    db.collection("friends").where("state", "==", "friends").get().then(snap=>snap.forEach(
        doc=>{
            friends=rWeFriends(doc.data().who)
        }
    ));
</script>

{friends}
