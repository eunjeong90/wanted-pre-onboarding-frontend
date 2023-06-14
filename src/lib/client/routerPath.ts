interface IUrlInfo {
  path: string;
  name: string;
}
interface IUrl {
  [key: string]: IUrlInfo;
}

const URL: IUrl = {
  main: { path: "/", name: "메인" },
  todo: { path: "/todo", name: "오늘할일" },
  signin: { path: "/signin", name: "로그인" },
  signup: { path: "/signup", name: "회원가입" },
};

export default URL;
