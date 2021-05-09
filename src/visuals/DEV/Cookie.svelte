
<script>
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import signedIn from '../../store/signedIn'

const set_cookie = currentSignedIn=>signedIn.update(lastSignedIn=>currentSignedIn)

let currentSignedIn=''

$:signedIn.subscribe(lastSignedIn=>currentSignedIn=lastSignedIn)

</script>

I am a cookie 🍪.

<h6>Signed in as {currentSignedIn}</h6>
<button on:click={()=>set_cookie('hassan')}>🍪Hassan</button>
<button on:click={()=>set_cookie('mostafa')}>🍪Mostafa</button>