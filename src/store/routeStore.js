import { writable } from 'svelte/store';

const WHISPER = 'whisper'
const FRIEND = 'friend'
const POST = 'post'
const LOGIN = 'login'

const route = writable(

    {
        render: [
            WHISPER,
            FRIEND,
            POST
        ], routes: {
            WHISPER,
            FRIEND,
            POST,
            LOGIN
        }
    }
    // obj:{

    // }
)

export default route


