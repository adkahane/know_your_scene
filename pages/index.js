const Index = () => (
  <body>
    <div class="container">
      <h1 class="text-center my-4">Look Up A Band</h1>
      <form class="form-inline justify-content-center">
        <input class="form-control" type="search" placeholder="Band Name" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Song</th>
            <th scope="col">Album</th>
            <th scope="col">Year Released</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Song 1</td>>
            <td>Album 1</td>
            <td>2001</td>
          </tr>
          <tr>
            <td>Song 2</td>>
            <td>Album 1</td>
            <td>2001</td>
          </tr>
          <tr>
            <td>Song 1</td>
            <td>Album 2</td>
            <td>2003</td>
          </tr>
        </tbody>
      </table>
      <div id='timeline-embed'></div>
    </div>
    // Optional JavaScript
    <script src="assets/app.js"></script>
    <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
    // jQuery first, then Popper.js, then Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
  </body>
);

export default Index;