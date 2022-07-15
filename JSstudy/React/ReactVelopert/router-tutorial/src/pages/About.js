import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트입니다</p>
      <br />
      <p>
        주소창에 http://localhost:3000/about?detail=true&mode=1 을 입력해보세요
      </p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
