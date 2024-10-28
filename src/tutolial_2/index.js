// 元データ
const products = [
  {
    id: 1,
    name: "スマートフォン",
    price: 70000,
    stock: 5,
    category: "電化製品",
  },
  { id: 2, name: "ノートPC", price: 120000, stock: 0, category: "電化製品" },
  {
    id: 3,
    name: "コーヒーメーカー",
    price: 25000,
    stock: 3,
    category: "キッチン",
  },
  {
    id: 3,
    name: "コーヒーメーカー",
    price: 25000,
    stock: 3,
    category: "キッチン",
  },
];

// 要件：
// 1. find()を使って、id: 2の商品を見つける
// 2. map()を使って、以下の情報を追加
// - status: 在庫の状態（"在庫あり"/"在庫なし"）
// - taxIncluded: 税込価格（税率10%）

const filteredData = Array(products.find((product) => product.id === 2)).map(
  (data) => {
    return {
      id: data.id,
      status: data.stock === 0 ? "在庫なし" : "在庫あり",
      taxIncluded: data.price * 1.1,
    };
  }
);
console.log(filteredData);
