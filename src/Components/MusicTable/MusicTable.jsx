
const MusicTable = (props) => {
    return (
        <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((setSongs, index) => {
                        return (
                            <tr key={index}>
                                <td>{setSongs.title}</td>
                                <td>{setSongs.artist}</td>
                                <td>{setSongs.album}</td>
                                <td>{setSongs.release_date}</td>
                                <td>{setSongs.genre}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    )
}

export default MusicTable;