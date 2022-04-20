<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# React-Egoing

React본질?  
React는 사용자 정의 태그(=컴퍼넌트=>함수)를 만드는 기술이다.   





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



## 정리

`<> </>` : React에서는 한번에 하나의 태그만 줄 수 있어서 여러개의 태그를 붙일려면 해당 태그로 시작과 끝을 맺어야함.
>>>>>>> 1f4b383b2e22f3ad8f22d6ec3a02d757efbcf4f0
