import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import CurrentUserContext from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  filterArray,
  filterObjectsByThreshold,
  saveToStorage,
  normalizeMovieData,
} from "../../utils/helpers";
import * as MainApi from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInStatusInStorage = JSON.parse(
    localStorage.getItem("isLoggedIn")
  );
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const storedShortsMoviesChecked = JSON.parse(
    localStorage.getItem("shortsMoviesChecked")
  );
  const storedMovies = JSON.parse(localStorage.getItem("filteredMovies"));
  const storedKeyword = localStorage.getItem("keyword");
  const [isShortsChecked, setIsShortsChecked] = useState(
    storedShortsMoviesChecked || false
  );
  const [isSavedShortsChecked, setIsSavedShortsChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(storedMovies || []);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMovies);
  const [previousSavedMovies, setPreviousSavedMovies] = useState(
    savedMovies || []
  );
  const [searchError, setSearchError] = useState("");
  const [searchSavedError, setSearchSavedError] = useState("");
  const [isLoading, setIsSearchLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successfulEditMsg, setSuccessfulEditMsg] = useState("");
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    saveToStorage(isShortsChecked, filteredMovies);
  }, [filteredMovies]);

  const loadSavedMovies = useCallback(async () => {
    try {
      const response = await MainApi.getSavedMovies();
      setSavedMovies(response);
    } catch (error) {
      setSearchSavedError(
        "Произошла непредвиденная ошибка. Это может быть вызвано работой сервера. Пожалуйста, повторите попытку позже."
      );
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      checkAuth();
      loadSavedMovies();
    }
  }, [isLoggedIn]);

  function showSearchInputError() {
    if (location.pathname === "/movies") {
      setSearchError("Пожалуйста, введите ключевое слово поиска");
    } else if (location.pathname === "/saved-movies") {
      setSearchSavedError("Пожалуйста, введите ключевое слово поиска");
    }
  }

  function handleSearch(filterKeyword) {
    setFilteredMovies([]);
    setSearchError("");

    if (initialMovies.length === 0) {
      setIsSearchLoading(true);
      getMovies()
        .then((movies) => {
          setInitialMovies(movies);
          let filtered = filterArray(movies, filterKeyword, [
            "nameRU",
            "nameEN",
          ]);

          if (isShortsChecked) {
            filtered = filterObjectsByThreshold(filtered, "duration", 40);
          }

          if (filtered.length === 0) {
            setSearchError("По вашему запросу совпадений не найдено");
          } else {
            setFilteredMovies(filtered);
          }
        })
        .catch(() =>
          setSearchError(
            "Произошла непредвиденная ошибка. Это может быть вызвано работой сервера. Пожалуйста, повторите попытку позже."
          )
        )
        .finally(() => setIsSearchLoading(false));
    } else {
      let filtered = filterArray(initialMovies, filterKeyword, [
        "nameRU",
        "nameEN",
      ]);

      if (isShortsChecked) {
        filtered = filterObjectsByThreshold(filtered, "duration", 40);
      }

      if (filtered.length === 0) {
        setSearchError("По вашему запросу совпадений не найдено");
      } else {
        setFilteredMovies(filtered);
      }
    }
  }

  function handleSearchSaved(filterKeyword) {
    setSearchSavedError("");

    let filtered = filterArray(savedMovies, filterKeyword, [
      "nameRU",
      "nameEN",
    ]);

    if (isSavedShortsChecked) {
      filtered = filterObjectsByThreshold(filtered, "duration", 40);
    }

    if (filtered.length === 0) {
      setSearchSavedError("По вашему запросу совпадений не найдено");
    } else {
      setFilteredSavedMovies(filtered);
    }
  }

  function handleShortsFilter() {
    setIsShortsChecked(!isShortsChecked);
  }

  function handleSavedShortsFilter() {
    setIsSavedShortsChecked(!isSavedShortsChecked);
  }

  useEffect(() => {
    setSearchError("");

    if (isShortsChecked && storedMovies && storedMovies.length !== 0) {
      const shorts = filterObjectsByThreshold(filteredMovies, "duration", 40);
      setFilteredMovies(shorts);

      if (shorts.length === 0) {
        setSearchError("По вашему запросу совпадений не найдено");
      }
    } else if (!isShortsChecked && storedMovies && storedMovies.length !== 0) {
      handleSearch(storedKeyword);
    }
  }, [isShortsChecked]);

  useEffect(() => {
    setSearchSavedError("");

    if (isSavedShortsChecked && savedMovies && savedMovies.length !== 0) {
      const savedShorts = filterObjectsByThreshold(savedMovies, "duration", 40);
      setPreviousSavedMovies(savedMovies);
      setFilteredSavedMovies(savedShorts);

      if (savedShorts.length === 0) {
        setSearchSavedError("По вашему запросу совпадений не найдено");
      }
    } else {
      setFilteredSavedMovies(previousSavedMovies);
    }
  }, [isSavedShortsChecked]);

  function handleSaveMovie(movie, isSaved, setIsSaved) {
    const normalizedMovie = normalizeMovieData(movie);

    if (!isSaved) {
      MainApi.saveMovie(normalizedMovie)
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
          setIsSaved(true);
        })
        .catch(() => {
          setSearchSavedError(
            "Произошла непредвиденная ошибка. Это может быть вызвано работой сервера. Пожалуйста, повторите попытку позже."
          );
        });
    }
  }

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );

    MainApi.deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((movie) => movie._id !== savedMovie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkAuth() {
    MainApi.checkAuth()
      .then((user) => {
        setCurrentUser(user);
        setSearchError("");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!isLoggedIn) {
      checkAuth();
    }
  }, [isLoggedIn]);

  function signinUser(email, password) {
    setIsFormDisabled(true);
    MainApi.authorizeUser(email, password)
      .then((res) => {
        if (res) {
          checkAuth();
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch(() => {
        setSubmitError("Что-то пошло не так...");
      })
      .finally(() => {
        setIsFormDisabled(false);
      });
  }

  function signupUser(email, password, name) {
    setIsFormDisabled(true);
    MainApi.registerUser(email, password, name)
      .then((res) => {
        if (res) {
          checkAuth();
          signinUser(email, password);
          navigate("/movies", { replace: true });
        }
      })
      .catch(() => {
        setSubmitError("Что-то пошло не так...");
      })
      .finally(() => {
        setIsFormDisabled(false);
      });
  }

  function handleEditProfile(name, email) {
    setIsFormDisabled(true);
    MainApi.editUserProfile(name, email)
      .then((user) => {
        setCurrentUser(user);
        setSuccessfulEditMsg("Профиль успешно изменен");
        setTimeout(() => {
          setSuccessfulEditMsg("");
        }, 3000);
      })
      .catch(() => {
        setSubmitError("Что-то пошло не так...");
      })
      .finally(() => {
        setIsFormDisabled(false);
      });
  }

  function logoutUser() {
    MainApi.logoutUser()
      .then(() => {
        setIsLoggedIn(false);
        setInitialMovies([]);
        setFilteredMovies([]);
        localStorage.clear();
        setIsShortsChecked(false);
        setIsSavedShortsChecked(false);
        navigate("/", { replace: true });
      })
      .catch(() => {
        setSubmitError("Что-то пошло не так...");
      });
  }

  useEffect(() => {
    setSubmitError("");
    setSearchSavedError("");
    setIsSavedShortsChecked(false);
    if (location.pathname === "/saved-movies") {
      setFilteredSavedMovies(savedMovies);
    }
  }, [location, savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={loggedInStatusInStorage}>
                  <Header isLoggedIn={isLoggedIn} />
                  <Movies
                    filteredMovies={filteredMovies}
                    savedMovies={savedMovies}
                    filteredSavedMovies={filteredSavedMovies}
                    onSubmit={handleSearch}
                    isShortsChecked={isShortsChecked}
                    onShortsCheck={handleShortsFilter}
                    searchError={searchError}
                    isLoading={isLoading}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    onNoInput={showSearchInputError}
                  />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={loggedInStatusInStorage}>
                  <Header isLoggedIn={isLoggedIn} />
                  <SavedMovies
                    filteredMovies={filteredMovies}
                    savedMovies={savedMovies}
                    filteredSavedMovies={filteredSavedMovies}
                    onShortsCheck={handleSavedShortsFilter}
                    onDeleteMovie={handleDeleteMovie}
                    searchError={searchSavedError}
                    isShortsChecked={isSavedShortsChecked}
                    onSubmit={handleSearchSaved}
                    onNoInput={showSearchInputError}
                  />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={loggedInStatusInStorage}>
                  <Header isLoggedIn={isLoggedIn} />
                  <Profile
                    user={currentUser}
                    onSubmit={handleEditProfile}
                    onSignout={logoutUser}
                    successfulEditMsg={successfulEditMsg}
                    submitError={submitError}
                    isFormDisabled={isFormDisabled}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onSubmit={signupUser}
                  submitError={submitError}
                  isFormDisabled={isFormDisabled}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onSubmit={signinUser}
                  submitError={submitError}
                  isFormDisabled={isFormDisabled}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
