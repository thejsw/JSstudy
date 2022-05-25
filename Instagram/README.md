# INSTAGRAM

# POSTMAN

### GET (Read)
/: feed
/login: 로그인페이지

/profiles/:username - 유저페이지
/profiles/:username/follower - 팔로워리스트
/profiles/:username/following - 팔로잉리스트

/articles/:postId - 게시물 페이지
/comments - 댓글

/explore - 랜덤 게시물 보기 (탐색)


### POST (create)
/Login - 로그인 로직
/Signin - 회원가입 로직

/profiles/:username/follow - 사용자 팔로우

/articles - 게시물 목록
/articles/:postId/favorite - 좋아요 추가
/articles/:postId/comments - 댓글 등록


### PUT (Update)
/articles/:postId - 게시물 업데이트
/articles/:postId/comments/:commentId - 댓글 업데이튼


### DELETE (Delete)
/profiles/:username/follow - 팔로우 취소
