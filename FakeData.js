const UserList = [
    {
        id: 1,
        name: "Feliza",
        username: "Feliza Colt",
        age: 12,
        nationality: "costarican",
        friends: [
            {
                id: 2,
                name: "Sully",
                username: "Sully Upcott",
                age: 91,
                nationality: "chilean",
            },
            {
                id: 5,
                name: "Denyse",
                username: "Denyse Songust",
                age: 10,
                nationality: "apache",
            }
        ]
    },
    {
        id: 2,
        name: "Sully",
        username: "Sully Upcott",
        age: 91,
        nationality: "chilean",
    },
    {
        id: 3,
        name: "Stanfield",
        username: "tanfield Housecroft",
        age: 52,
        nationality: "tohonoodham",
    },
    {
        id: 4,
        name: "Guenna",
        username: "Guenna Klimes",
        age: 88,
        nationality: "indonesian",
        friends: [
            {
                id: 2,
                name: "Sully",
                username: "Sully Upcott",
                age: 91,
                nationality: "chilean",
            }
        ]
    },
    {
        id: 5,
        name: "Denyse",
        username: "Denyse Songust",
        age: 10,
        nationality: "apache",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPub: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPub: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPub: 2007,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "Rana",
        yearOfPub: 2020,
        isInTheaters: true,
    },
    {
        id: 5,
        name: "Spongebob",
        yearOfPub: 2007,
        isInTheaters: false,
    },
];


module.exports = {UserList, MovieList};