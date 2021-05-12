



<script>
// import signedIn from '../../store/signedIn' 
// $:signedIn.subscribe(lastSignedIn=>currentSignedIn=lastSignedIn)


import signedIn from '../../store/signedIn'

const set_cookie = currentSignedIn=>{

    if(!currentSignedIn){
        signedIn.update(lastSignedIn=>{
            return null;
        })    
    }

    signedIn.update(lastSignedIn=>currentSignedIn)
}

let currentSignedIn=''

$:signedIn.subscribe(lastSignedIn=>currentSignedIn=lastSignedIn)

</script>

<h6>Signed in as {currentSignedIn}</h6>
<button on:click={()=>set_cookie()} class="btn btn-danger">Sign Out</button>
<button on:click={()=>set_cookie('hassan')}>🍪Hassan</button>
<button on:click={()=>set_cookie('hossam')}>🍪Hossam</button>
<button on:click={()=>set_cookie('mostafa')}>🍪Mostafa</button>