import { writable } from 'svelte/store';

const route = writable(

    {
        array: [
            'whisper',
            'friend',
            'post',
        ], ref: {

            WHISPER: "whisper",
            FRIEND: "friend",
            POST: 'post',
            LOGIN: 'login'
        }
    }
    // obj:{

    // }
)

export default route


