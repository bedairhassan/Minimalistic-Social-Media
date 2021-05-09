
<script>
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const set_cookie = who=>bake_cookie('signedin',who)


if (process.browser) {
    const myCookieValue = getCookie("myCookie");
}

</script>

I am a cookie.

<h6>Signed in as {getCookie('signedin')}</h6>
<button on:click={()=>set_cookie('hassan')}>🍪Hassan</button>
<button on:click={()=>set_cookie('mostafa')}>🍪Mostafa</button>