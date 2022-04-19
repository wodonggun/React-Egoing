# React-Egoing

React본질?
>> React는 사용자 정의 태그(=컴퍼넌트=>함수)를 만드는 기술이다.   


--------- 


npx = Node.js 설치 필수.

- `npx create-react-app my-app` : react 프로젝트 생성


- npx vs npm 차이
![image](https://user-images.githubusercontent.com/35188271/163705105-013faf29-f773-4372-aa4a-4b0ae4a3ec57.png)



- `npm start` : react prject 실행




- `npm run build` : react 배포버전 빌드  
build를 통해서 build라는폴더가 생기고, index.html에 공백을 다 제거하고 경량화를 갖춤.

- `npx serve -s build` : `-s`(어떤경로로 오던 해당service의 index.html로 지정) / `build`에 있는 index.html을 실행한다. 





## state

App(Main)함수는 처음에 한번만 실행되기 때문에, App함수를 다시 호출하고 싶을때 state를 사용.


![image](https://user-images.githubusercontent.com/35188271/163705755-9a842f3a-2518-4c34-946a-041984bf4377.png)



## setMode

1. Mode값을 지정하여 해당 Mode값 마다 분기 나눌 수 있음.
2. 하나의 컴퍼넌트를 리렌더링 유동할 수 있음.

![image](https://user-images.githubusercontent.com/35188271/163713009-1968bc47-32eb-4a6e-9f23-3a0ff0c6d383.png)


