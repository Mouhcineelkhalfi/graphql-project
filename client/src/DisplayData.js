import React, { useState } from "react";
import {useQuery, useLazyQuery, gql, useMutation} from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users {
            id
            name
            username
            age
            nationality
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllUMovies{
        movies {
            id
            name
            yearOfPub
            isInTheaters
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            yearOfPub
        }
    }
`

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            name
            id
        }
    }
`

function DisplayData() {

    //useState
    const [movieSearched, setMovieSearched] = useState("");

    // Create User States
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");

    //useQuery
    const {data, loading, refetch} = useQuery(QUERY_ALL_USERS);
    const {data: movieData,} = useQuery(QUERY_ALL_MOVIES);

    //uselazyquery
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME)

    const [createUser] = useMutation(CREATE_USER_MUTATION)

    if (loading) {
        return <h1>DATA IS LOADING...</h1>
    }


    return (
        <div>
            <div>
                <input type="text" placeholder="Name..." onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <input type="text" placeholder="Username..." onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <input type="number" placeholder="Age..." onChange={(event) => {
                    setAge(event.target.value);
                }}/>
                <input type="text" placeholder="Nationality..." onChange={(event) => {
                    setNationality(event.target.value.toLowerCase());
                }}/>
                <button onClick={() => {
                    createUser({
                        variables: {input: { name: name, age: Number(age), username: username, nationality: nationality}},
                    });
                    refetch()
                    }
                }>Create User
                </button>
            </div>
            {data && data.users.map((user) => {
            return (
                <div> 
                <h1>Name: {user.name}</h1>
                <h1>Username: {user.username}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Nationality: {user.nationality}</h1>
                </div>
                )
            })}

            {movieData && movieData.movies.map((movie) => {
                return <h1>movie Name: {movie.name}</h1>
            })}

            <div>
                <input type="text" placeholder="Interstellar..." onChange={(event) => {setMovieSearched(event.target.value)}}/>
                <button onClick={() => fetchMovie({variables: {
                    name: movieSearched,
                }
                })}>
                    Fetch Data
                </button>
                <div>
                    {movieSearchedData && (
                        <div>
                            {" "}
                            <h1>MovieName: {movieSearchedData.movie.name}</h1>{" "}
                            <h1>Year Of Publication: {movieSearchedData.movie.yearOfPub}</h1>{" "}
                        </div>
                    )}
                    {movieError && <h1> There was an error fatching data</h1>}
                </div>
            </div>
        </div>
    )
}

export default DisplayData;