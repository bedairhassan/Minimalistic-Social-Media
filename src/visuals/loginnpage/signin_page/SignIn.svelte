<script>
import { db } from "../../../JS/firebase";



// db

let username,password;


const fetch = ()=>{
    db.collection("sign").onSnapshot((snap) => {

        snap = snap.docs
        console.log(snap)

        snap = snap.map(item=>item.data())
        console.log(snap)

        snap = snap.filter(item=>item.username===username)
        console.log(snap)

        if(snap.length>0){
            alert('SIGNEDIN')
        }
    });
}

const SignIn = ()=>{
    const condition = fetch()
}

</script>

<h1>SignIn</h1>

<input type="text" placeholder="enter your username"  bind:value={username}/>
<input type="password" placeholder="enter your password"  bind:value={password}/>
<button on:click={SignIn}>SignIn</button>

{username}
{password}