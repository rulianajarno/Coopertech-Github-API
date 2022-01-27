function RepoStars({ details, loading }) {
  if (loading) {
    return <h1 className="loader">Loading...</h1>;
  }
  return (
    <div className="repo-details-container">
      <div className="details-row">
        <div id="gitStar">
          <img src="https://camo.githubusercontent.com/0e814bf886833da1e0f67f53e46eeb299b37a793cbd484093fe459fd62d366c6/68747470733a2f2f6769746875622e626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f30392f6769746875622d73746172732d6c6f676f5f436f6c6f722e706e67" />
        </div>
        <label className="label">Stars:</label>
        <span className="value">{details.stargazers_count}</span>
      </div>
    </div>
  );
}

export default RepoStars;
