const element = (
  //   Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Super Over League</h1>
    </div>
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="leagueImg"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="leagueImg"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
