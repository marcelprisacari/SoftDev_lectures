import React from "react";
import { Table } from "reactstrap";

function MovieTable(props) {
    return (
        <>
            <h1>Movies</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Length</th>
                        <th>Year Released</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map((movie) => (
                        <tr key={movie._id}>
                            <th scope="row">{movie.title}</th>
                            <td>{movie.genre}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.length}</td>
                            <td>{movie.releaseYear}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default MovieTable;
