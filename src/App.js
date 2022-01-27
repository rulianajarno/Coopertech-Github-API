import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import RepoStars from "./RepoStars";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setDetails({});
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="row-name">{repo.name}</h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `http://api.github.com/repos/${username}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <img
            id="logocoop"
            src="https://www.onsv.org.br/wp-content/uploads/2018/08/coopercarga.png"
          />
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="Github Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              {loading == true ? "Searching" : "Search"}
            </button>
          </form>
          <div className="results-container">{repos.map(renderRepo)}</div>
        </div>
        <div>
          <RepoStars details={details} loading={detailsLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;
