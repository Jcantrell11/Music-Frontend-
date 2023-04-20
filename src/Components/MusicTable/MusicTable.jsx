
const MusicTable = (props) => {
    return (
        <><form>
            <div>
                <input type="text"></input>
            </div>
            <button type='submit'>Search</button>
        </form><table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
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
            </table></>
    )
}

export default MusicTable;