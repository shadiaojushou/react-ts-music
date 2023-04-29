/// <reference types="react-scripts" />

// 声明变量
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_URL: string
  }
}
