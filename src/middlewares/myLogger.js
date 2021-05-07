// 액션이 디스패치되기 전과 후의 상태를 볼 수 있다
const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\tPrev", store.getState());
  const result = next(action);
  console.log("\tNext", store.getState());
  return result;
};

export default myLogger;
