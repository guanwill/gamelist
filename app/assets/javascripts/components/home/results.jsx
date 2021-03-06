var Results = React.createClass({

  render: function(){

    if (this.props.currentUser != null) {
      var currentUserName = this.props.currentUser.name
    }

    var resultItems = this.props.searchResults.map(function(result){
      return (
        <ResultItems key={result.id} gameResult={result} currentUser={currentUserName} />
      );
    });

    return (
      <div className="search-container">

        <div className="divider-second-top">
          <p></p>
        </div>

        <div className="search-container2">
        <div className="search-container2-overlay">
          <div className="search-results-container">
            {resultItems}
          </div>
        </div>
        </div>

        <div className="divider-top">
          <p><span> Build your own game list <a href="/games_index">here</a> </span></p>
        </div>

      </div>
    );
  }
})
