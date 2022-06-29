import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHart,
  faPen,
  faMagnifyingGlass,
  faDog,
  faCompass,
  faHouse,
  faEllipsisVertical,
  faArrowRightFromBracket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faComment as farComment,
} from "@fortawesome/free-regular-svg-icons";

function App() {
  console.log("App Loaded!");

  return (
    <div className="mx-auto pb-5" style={{ maxWidth: "350px" }}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* 로그인 필요 */}
            <Route
              path="/"
              element={
                <AuthRequired>
                  <Layout />
                </AuthRequired>
              }
            >
              <Route index element={<Home />} />
              <Route path="create" element={<CreateArticle />} />
              <Route path="explore" element={<Explore />} />
              <Route path="search" element={<Search />} />
              <Route path="/p/:postId">
                <Route index element={<PostView />} />
                <Route path="update" element={<UpdateArticle />} />
                <Route path="comments" element={<Comments />} />
              </Route>
              <Route path="/profiles/:username">
                <Route index element={<Profile />} />
                <Route path="edit" element={<ProfileEdit />} />
                <Route path="follower" element={<FollowerList />} />
                <Route path="following" element={<FollowingList />} />
              </Route>
            </Route>
            {/* 로그인 필요하지 않음 */}
            <Route path="account/signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

const AuthContext = createContext();

function AuthProvider(props) {
  console.log("AuthProvider Loaded!");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  // 처음 접속했을때 = 새로고침
  useEffect(() => {
    // 서버에 토큰을 보내서 유저 정보를 요청한다.
    fetch("http://localhost:3000/user", {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (res.status === 401) {
          return null;
        }
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  // 로그인
  function signIn(newUser, callback) {
    setUser(newUser);
    callback();
  }

  function logOut() {
    localStorage.removeItem("jwt");
    setUser(null);
  }

  console.log(user);

  const value = { user, signIn, logOut }; // { user: user, signIn: signIn, logOut: logOut }

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

function AuthRequired(props) {
  console.log("AuthRequired Loaded!");

  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  console.log(auth);

  return props.children;
}

function Layout() {
  console.log("Layout Loaded!");

  const auth = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      {/* Header */}
      <div className="py-3 border-bottom">
        <div className="flex justify-content-between">
          <button className="btn-link" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
          <div className="fs-3">AnimalFriends</div>
        </div>
      </div>

      <div className="fixed-bottom border-top bg-white">
        <div className="flex flex-equal py-3">
          <Link className="text-center" to="/">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          </Link>{" "}
          <Link to="/explore">
            <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon>
          </Link>{" "}
          <Link to="/create">
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </Link>{" "}
          <Link to={`/profiles/${auth.user.username}`}>
            <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
          </Link>{" "}
        </div>
      </div>

      {/* 바뀌는 부분 */}
      <Outlet />
    </>
  );
}

function Home() {
  console.log("Home Loaded!");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/feed`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoaded(true));
  }, []);

  console.log(articles);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Home</h1>
      {articles.map((article, index) => (
        <div key={index} className="my-3">
          {/* PostItem 컴포넌트를 반복적으로 return한다 */}
          <PostItem article={article} isFavorite={article.isFavorite} />
        </div>
      ))}
    </>
  );
}

function PostView() {
  console.log("PostView Loaded!");

  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // 게시물을 담을 변수
  const [article, setArticle] = useState(null);
  // 해당 게시물을 사용자가 좋아하는 게시물인지 여부
  const [isFavorite, setIsFavorite] = useState(null);
  const [articles, setArticles] = useState([]);

  console.log(isLoaded);

  // 순회 가능한 객체(Array)에 주어진 모든 프로미스가 이행된 후,
  // 주어진 프로미스중 하나라도 거부되는 경우 error 발생
  useEffect(() => {
    // 컴포넌트가 다시 렌더링이 될 때 isLoaded를 false로 한다
    setIsLoaded(false);

    Promise.all([
      fetch(`http://localhost:3000/articles/${postId}`),
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }),
      fetch(`http://localhost:3000/articles/${postId}/more`),
    ])
      .then((responses) => {
        responses.map((response) => {
          if (!response.ok) {
            throw response;
          }
        });
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setArticle(data[0]);
        setIsFavorite(data[1]);
        setArticles(data[2]);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, [postId]);
  // postId가 바뀔 때 useEffect가 effect(callback)을 다시 호출한다

  console.log(article);
  console.log(isFavorite);
  console.log(articles);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <PostItem article={article} isFavorite={isFavorite} />
      {/* 이전글, 다음글 버튼은 PostView에서만 보인다 */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {articles.prevArticle && (
          <Link to={`/p/${articles.prevArticle._id}`}>&larr; Prev</Link>
        )}
        {articles.nextArticle && (
          <Link to={`/p/${articles.nextArticle._id}`}>Next &rarr;</Link>
        )}
      </div>
    </>
  );
}

function PostItem({ article, isFavorite: isFavoriteInitial }) {
  console.log("PostItem Loaded!");

  const auth = useContext(AuthContext);
  // 게시물 작성자와 로그인 유저가 일치하면 Master
  const isMaster = article.author._id === auth.user._id ? true : false;
  const postId = article._id;
  const navigate = useNavigate();

  // db에서 가져온 처음 상태
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitial);
  const [favoriteCount, setFavoriteCount] = useState(article.favoriteCount);

  // Carousel
  // document.querySelectorAll('.item');
  const carouselItems = [];
  const carouselIndicators = [];
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const [left, setLeft] = useState(0);

  function deleteArticle() {
    fetch(`http://localhost:3000/articles/${postId}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      // replace: true 현재 페이지를 대체한다
      .then(() => navigate("/", { replace: true }))
      .catch((error) => alert(error));
  }

  function handleChange() {
    if (!isFavorite) {
      // 좋아요를 누른다
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          setIsFavorite(true);
          setFavoriteCount(favoriteCount + 1);
        })
        .catch((error) => alert("Error!"));
    } else {
      // 좋아요를 취소한다
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          setIsFavorite(false);
          setFavoriteCount(favoriteCount - 1);
        })
        .catch((error) => alert("Error!"));
    }
  }

  function setItemRef(ref) {
    // 여러개로 출력되는 carousel item을 carouselItems array에 추가한다
    carouselItems.push(ref);
  }
  function setIndicatorRef(ref) {
    // 여러개로 출력되는 carousel dot을 carouselIndicators array에 추가한다
    carouselIndicators.push(ref);
  }

  useEffect(() => {
    // navigateTo함수가 비동기로 작동해야 하는 이유는
    // useRef가 컴포넌트가 return할 때 element를 current에 담기 때문이다
    // { current: null }

    console.log(carouselItems);
    console.log(carouselIndicators);

    navigateTo(left);
  });

  // carousel을 작동하게 하는 함수
  function navigateTo(data) {
    console.log(data);
    console.log(prevBtn);
    console.log(nextBtn);

    carouselItems[0].style.marginLeft = `-${100 * data}%`;

    // active는 display: block으로 만든다.
    prevBtn.current.classList.add("active");
    nextBtn.current.classList.add("active");

    // 마지막 이미지일 때, 다음 버튼을 안보이게 한다
    if (data === carouselItems.length - 1) {
      nextBtn.current.classList.remove("active");
    }

    // 첫번째 이미지일 때, 이전 버튼을 안보이게 한다.
    if (data === 0) {
      prevBtn.current.classList.remove("active");
    }

    // Indicator
    // dot에 .active를 모두 제거한다 (초기화)
    carouselIndicators.map((indicator) => {
      indicator.classList.remove("active");
    });
    // index(data)에 해당하는 dot에 .active class를 추가한다
    carouselIndicators[data].classList.add("active");
  }

  return (
    <>
    {/* 유저 아바타 */}
      <div className="flex justify-content-between my-2">
        <div className="flex">
          <div className="avatar">
            <img src={`http://localhost:3000/user/${article.author.image}`}></img>
          </div>
          <div className="flex align-center ms-1">
            <Link to={`/profiles/${article.author.username}`}>{article.author.username}</Link>
          </div>
        </div>
        {/* 더보기 버튼 */}
        {isMaster &&
          <button className="btn-link">
            <FontAwesomeIcon icon={faEllipsisVertical}/>
          </button>
        }
      </div>


      {/* Carousel Start */}
      <div className="relative">
        {/* carosel 이미지 부분 */}
        <div className="carousel">
          {article.photos.map((photo, index) => (
            // 반복적으로 출력되는 DOM을 선택할 때 ref를 함수로 작성한다
            <div key={index} ref={(itemRef) => setItemRef(itemRef)}>
              <img src={`http://localhost:3000/posts/${photo}`} />
            </div>
          ))}
        </div>
        {/* 이전, 다음 버튼 */}
        <div className="carousel-btn-group">
          <button
            className="prev"
            onClick={() => setLeft(left - 1)}
            ref={prevBtn}
          >
            &#10094;
          </button>
          <button
            className="next"
            onClick={() => setLeft(left + 1)}
            ref={nextBtn}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="carousel-indicator my-3">
        {/* dot은 사진의 갯수만큼 출력된다 */}
        {article.photos.map((photo, index) => (
          <span className="dot" key={index} ref={setIndicatorRef}>
            @
          </span>
        ))}
      </div>
      {/* Carousel End */}

      {/* {isMaster && (
        <div>
          <Link to={`/p/${postId}/update`}>수정</Link>{" "}
          <button onClick={deleteArticle}>삭제</button>
        </div>
      )} */}

      {/* 좋아요 댓글달기 */}
      <div className="flex">
        <button className="btn-link fs-3">
          {isFavorite ?
            <FontAwesomeIcon icon={faHeart} className="text-red" />
            :
            <FontAwesomeIcon icon={farHeart}/>
          }
        </button>
      </div>

      <button onClick={handleChange}>
        {!isFavorite ? "좋아요" : "좋아요 취소"}
      </button>
      <p>좋아요: {favoriteCount}</p>
      <p>{article.description}</p>
      <small>
        <Link to={`/p/${postId}/comments`}>댓글달기</Link>
      </small>
    </div>
  );
}

function Comments() {
  console.log("Comments Loaded!");

  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments] = useState([]);

  const inputEl = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${postId}/comments`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setComments(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  console.log(comments);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`http://localhost:3000/articles/${postId}/comments`, {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      body: new URLSearchParams(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((newComment) => {
        // comments.push(newComment)
        inputEl.current.value = "";
        setComments([...comments, newComment]);
      })
      .catch((error) => alert(error));
  }

  function deleteComment(commentId) {
    fetch(`http://localhost:3000/articles/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        const updatedComments = comments.filter(
          (comment) => comment._id !== commentId
        );
        setComments(updatedComments);
      })
      .catch((error) => alert(error));
  }

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h3>댓글</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="content" autoComplete="off" ref={inputEl} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.content}{" "}
            <span onClick={() => deleteComment(comment._id)}>&times;</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Profile() {
  console.log("Profile Loaded!");

  const auth = useContext(AuthContext);
  const params = useParams();
  const username = params.username;
  const isMaster = auth.user.username === username ? true : false;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [profile, setProfile] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);
  const [followerList, setFollowerList] = useState(null);
  const [followingList, setFollowingList] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3000/profiles/${username}`),
      fetch(`http://localhost:3000/profiles/${username}/isFollowing`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }),
      fetch(`http://localhost:3000/profiles/${username}/followerList`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }),
      fetch(`http://localhost:3000/profiles/${username}/followingList`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }),
      fetch(`http://localhost:3000/articles?username=${username}`),
    ])
      .then((responses) => {
        // status 200만 받는다 (ok: true)
        responses.map((response) => {
          if (!response.ok) {
            throw response;
          }
        });

        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        console.log(data);

        setProfile(data[0]);
        setIsFollowing(data[1]);
        setFollowerList(data[2]);
        setFollowingList(data[3]);
        setArticles(data[4]);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, [username]);

  function handleFollow(e) {
    e.preventDefault();

    if (!isFollowing) {
      // 새롭게 팔로우를 시작함
      fetch(`http://localhost:3000/profiles/${username}/follow`, {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          // return res.json() 가 생략됬다
          setIsFollowing(true);
        })
        .catch((error) => setError(error));
    } else {
      // 팔로우를 취소함
      fetch(`http://localhost:3000/profiles/${username}/follow`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          setIsFollowing(false);
        })
        .catch((error) => setError(error));
    }
  }

  function logOut() {
    let res = window.confirm("로그아웃 하시겠습니까?");

    if (!res) {
      return;
    }
    auth.logOut();
  }

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {/* 프로필 사진 */}
      <div className="flex mt-3 justify-content-center">
        <div className="profile-image rounded-circle">
          <img
            src={`http://localhost:3000/user/${profile.image || "avatar.jpeg"}`}
          ></img>
        </div>
      </div>

      {/* bio */}
      <div>
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        {isMaster && (
          <>
            <p>
              <Link
                to={`/profiles/${username}/edit`}
                className="text-small text-secondary"
              >
                프로필 수정
              </Link>
            </p>
          </>
        )}
      </div>

      {/* 팔로워 및 팔로잉, 게시물 개수 */}
      <div>
        <ul>
          <div>
            팔로워 <Link to={`/profiles/${username}/follower`}>Follower</Link>{" "}
            {followerList.length}
          </div>
          <div>
            팔로잉 <Link to={`/profiles/${username}/following`}>Following</Link>
            {followingList.length}
          </div>
          <div>게시물 {articles.length}</div>
        </ul>
      </div>

      {/* 게시물 */}
      <div>
        {articles.map((article, index) => (
          <div>
            key={index}
            <Link to={`/p/${article._id}`}>
              <img
                src={`http://localhost:3000/posts/${article.photos[0]}`}
              ></img>
            </Link>
          </div>
        ))}
      </div>

      {/* 팔로우 버튼 */}
      {!isMaster && (
        <form onAbort={handlefollow}>
          <button className="btn w-100 btn-primary">팔로잉</button>
          <button className="btn w-100 btn-primary">팔로우</button>
        </form>
      )}

      <div>
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        {isMaster && (
          <p>
            <Link to={`/profiles/${username}/edit`}>Edit Profile</Link>
          </p>
        )}
      </div>

      <div>
        {!isMaster && (
          <form onSubmit={handleFollow}>
            <button>{isFollowing ? "Unfollow" : "Follow"}</button>
          </form>
        )}
      </div>

      {/* 게시물 */}
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <Link to={`/p/${article._id}`}>
              <img src={`http://localhost:3000/posts/${article.photos[0]}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

function ProfileEdit() {
  console.log("ProfileEdit Loaded!");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${auth.user.username}`)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/profiles/edit`, {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      body: new FormData(e.target),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        navigate(`/profiles/${auth.user.username}`);
      })
      .catch((error) => {
        alert(error);
      });
  }

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Username</h3>
          <p>{profile.username}</p>
        </div>
        <div className="form-group">
          <h3>Image</h3>
          <input type="file" name="image" />
          {profile.image && <p>1 Image uploaded</p>}
        </div>
        <div className="form-group">
          <h3>Bio</h3>
          <input
            type="text"
            name="bio"
            className="form-group"
            defaultValue={profile.bio}
          />
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

function FollowingList() {
  console.log("FollowngList Loaded!");

  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${params.username}/followingList`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setFollowingList(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  console.log(followingList);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Following List</h1>
      <ul>
        {followingList.map((following, index) => (
          <li key={index}>
            <Link to={`/profiles/${following.followingId.username}`}>
              {following.followingId.username}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function FollowerList() {
  console.log("FollowerList Loaded!");

  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${params.username}/followerList`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setFollowerList(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  console.log(followerList);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Following List</h1>
      <ul>
        {followerList.map((follower, index) => (
          <li key={index}>
            <Link to={`/profiles/${follower.followerId.username}`}>
              {follower.followerId.username}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function Explore() {
  console.log("Explore Loaded!");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setArticles(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  console.log(articles);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="my-3">
        <Link to='/search' className="fs-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
      <div className="grid">
        {articles.map((article, index) => (
          <div key={index}>
            <Link to={`/p/${article._id}`}>
              <img src={`http://localhost:3000/posts/${article.photos[0]}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

function Search() {
  console.log("Search Loaded!");

  const [word, setWord] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setIsLoaded(false)

    // word (검색어)가 업데이트 될 때마다 서버에 요청을 보낸다.
    fetch(`http://localhost:3000/users?username=${word}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, [word]);

  function handleChange(e) {
    setWord(e.currentTarget.value);
  }

  console.log(word);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <form>
        <input type="text" onChange={handleChange} value={word} />
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/profiles/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function UpdateArticle() {
  console.log("UpdateArticle Loaded!");

  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${postId}`)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => setArticle(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/articles/${postId}`, {
      method: "PUT",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      body: new FormData(e.target),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => navigate(`/p/${postId}`))
      .catch((error) => alert(error));
  }

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Update Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Description</h3>
          <input
            type="text"
            name="description"
            defaultValue={article.description}
          />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <p>{article.photos.length} photos</p>
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

function CreateArticle() {
  console.log("CreateArticle Loaded!");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      body: new FormData(e.target),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert("Error!"));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Description</h3>
          <input type="text" className="w-100" name="description" />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <input type="file" name="photos" multiple={true} />
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  );
}

function SignUp() {
  console.log("SignUp Loaded!");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newUser, setNewUser] = useState({});

  const [validation, setValidation] = useState(null);

  useEffect(() => {
    console.log("new User..", newUser);
    fetch("http://localhost:3000/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser), // JSON.stringify(object) object를 json 포맷으로 변환
    })
      .then((res) => {
        if (!res.ok) {
          throw res; // 커스텀 에러. status가 200이 아닐 경우
        }
        return res.json(); // res객체의 body를 parsing한다.
      })
      .then((data) => setValidation(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, [newUser]); // [dependency]: 처음에 실행된다. dependency가 변할 때마다 실행된다

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // newUser에 새로운 속성을 추가한다
    setNewUser({ ...newUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    for (let key of Object.keys(validation)) {
      // 4 항목중에 하나라도 pass: false면 form이 제출되지 않도록 한다.
      if (validation[key].pass === false) {
        return alert("가입 정보가 올바르지 않습니다.");
      }
    }

    // 유효성 검사 통과 후 가입 절차를 진행한다.
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        console.log("가입 성공!");
      })
      .catch((error) => {
        console.error(error);
        alert("에러가 발생했습니다. 잠시 후 다시 시도해주세요");
      });
  }

  console.log(newUser);
  console.log(validation);

  if (error) {
    return <h1>Error!</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>사용자 이름</h3>
          <input
            type="text"
            name="username"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="text-success">{validation.username.message}</div>
          <div className="text-danger">{validation.username.message}</div>
        </div>
        <div className="form-group">
          <h3>이메일</h3>
          <input
            type="text"
            name="email"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="text-danger">{validation.username.message}</div>
          <div >{validation.email.message}</div>
        </div>
        <div className="form-group">
          <h3>비밀번호</h3>
          <input
            type="text"
            name="password"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="text-danger">{validation.username.message}</div>
          <div >{validation.password.message}</div>
        </div>
        <div className="form-group">
          <h3>비밀번호 확인</h3>
          <input
            type="text"
            name="password_confirm"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="text-danger">{validation.username.message}</div>
          <div >{validation.passwordConfirm.message}</div>
        </div>
        <div className="form-group">
          <h3>가입</h3>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
function Login() {
  console.log("Login Loaded!");

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // 로그인에 실패한 경우 (token이 없을 경우)
        if (!data.token) {
          return setMessage(data.message);
        }
        // 로그인에 성공한 경우, 브라우저에 jwt을 저장한다
        localStorage.setItem("jwt", data.token);
        // 로그인에 성공한 경우 Home으로 이동한다
        auth.signIn(data.user, () => navigate("/"), { replace: true }); // auth.signIn(callback)
      })
      .catch((error) => alert("Error!"));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="text"
            className=""
            name="email"
            defaultValue="bunny@example.com"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className=""
            name="password"
            defaultValue="12345678"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button className="">Login</button>
        </div>
      </form>
      <p>{message}</p>
      <p>
        <Link to="/account/signup">Create account</Link>
      </p>
    </>
  );
}
function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
