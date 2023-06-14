# `원티드 프리온보딩 프론트엔드 - 선발 과제`
원티드 프리온보딩 프론트엔드 인턴쉽 **지원자 장은정**의 레파지토리 입니다.
* 선발 과제 배포 링크 : <https://wanted-pre-onboarding-frontend-murex-seven.vercel.app>



## Getting Started
***
1.깃 레파지토리 클론 : 

    git clone https://github.com/eunjeong90/wanted-pre-onboarding-frontend.git

2.설치 경로로 이동 :

    cd wanted-pre-onboarding-frontend
3.설치 :

    npm install

4.실행 : 

    npm start


## Dependencies
***
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> 
<img src="https://img.shields.io/badge/axios-671CDE?style=for-the-badge&logo=React&logoColor=black" /> 
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white" /> 

## Features
***
### 회원가입 및 로그인 구현 
- 유효성 검사
  - 잘못된 정보 기입시 에러 메세지 표시
- JWT token 사용자 인증
- 가입한 이력이 있는 아이디의 경우 원티드 서버 에러 메세지를 띄워준 후 로그인 페이지로 이동
- useInputs 훅을 사용하여 회원가입과 로그인 input 핸들링
### CRUD :
- 투두리스트(오늘할일)에서는 작성된 리스트 데이터가 보여지며 데이터 추가, 수정, 삭제가 가능.
- 투두리스트 컴포넌트 리스트 불러올 시 useCallback 최적화

