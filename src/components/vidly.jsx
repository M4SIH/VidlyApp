import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import "./vidly.css";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link, Route } from "react-router-dom";
import Customers from "./customers";
import Rental from "./rental";
import { Switch } from "react-router-dom";
import SearchBox from "./common/searchBox";

class Vidly extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (id) => {
    this.setState({ number: getMovies.length - 1 });
    deleteMovie(id);
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedDate = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      genres,
      selectedGenre,
      searchQuery,
    } = this.state;

    const { totalCount, data: movies } = this.getPagedDate();

    return (
      <React.Fragment>
        <div className="row m-5 p-2">
          <Switch>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/rental" element={<Rental />}></Route>
          </Switch>
          <div className="col-2">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary row mb-1 p-1">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/movies/new"
              >
                New Movie
              </Link>
            </button>
            <div className="showCount">
              {totalCount === 0 ? (
                <p>There are no movies in database</p>
              ) : (
                <p>Showing {totalCount} movies in the database.</p>
              )}
            </div>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
          <div className="row">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vidly;
