const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        fontSize: 24,
      }}
    >
      지금 접속하신 페이지는 없는 페이지입니다. <br />
      다른 주소로 접속해주세요.
    </div>
  );
};

export default NotFound;
