// 元データ（APIレスポンス想定）
const users = [
  { id: 1, first_name: "Taro", last_name: "Yamada", age: 25 },
  { id: 2, first_name: "Hanako", last_name: "Sato", age: 30 },
  { id: 3, first_name: "Jiro", last_name: "Tanaka", age: 28 },
  { id: 3, first_name: "Jiro", last_name: "Tanaka", age: 13 },
  { id: 3, first_name: "Jiro", last_name: "Tanaka", age: 19 },
  { id: 3, first_name: "Jiro", last_name: "Tanaka", age: 21 },
];

// 要件：
// 1. map()を使って、以下のフォーマットに変換してください
// - fullName: 姓名を結合（例："Yamada Taro"）
// - isAdult: 20歳以上かどうかのブール値

/* 回答 */
const formattedData = users.map((user) => {
  return {
    fullName: `${user.last_name} ${user.first_name}`,
    isAdult: user.age >= 20,
  };
});
console.log(formattedData);
