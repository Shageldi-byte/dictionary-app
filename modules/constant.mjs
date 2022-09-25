import { my_users } from "./users.mjs";

export let users=JSON.parse(my_users);
export let words=[
    {
        id:1, // ORA
        en:"apple",  // APPLE
        tm:"alma",
        pr:"okalshy",
        eg:"I like apple",
        userId:1
    },
    {
        id:2,
        en:"orange",  // ORANGE
        tm:"opelsin",
        pr:"okalshy",
        eg:"I like orange",
        userId:4
    }
];


export let BLACK_LIST=["::ffff:192.168.1.7","::ffff:192.168.1.3"];