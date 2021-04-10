import * as postsAPI from "../api/posts";

// 특정 요청이 시작됐음을 알리는 액션
const GET_POSTS = "posts/GET_POSTS";

// GET_POSTS 요청이 끝나서 성공했으니 상태 어딘가에 담겠다
const GET_POSTS_SUCCESS = "posts/GETPOSTS_SUCCESS";

// 오류가 났고 로딩 끝났고 에러가 난 것을 상태 어딘가에 담겠다
const GET_POSTS_ERROR = "posts/GETPOSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });

  // API를 호출
  try {
    const posts = await postsAPI.getPosts();
    // 성공했을 때
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    // 실패했을 때
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });

  // API를 호출
  try {
    const post = await postsAPI.getPost(id);
    // 성공했을 때
    dispatch({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    // 실패했을 때
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};
