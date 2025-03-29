export default function Movies() {
  return (
    <main>
      <h2>Movie Card Stack</h2>

      <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img src="https://via.placeholder.com/150" alt="Movie Poster" />
                </div>
                <div className="card-content">
                    <h3>Movie Title</h3>
                    <p>Movie Description</p>
                    <p>Release Date</p>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    </main>
  );
}