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

/* 回答 */

/* 定数 */
//税
const TAX_RATE = 1.1;
//在庫
const STOCK_STATUS = {
  IN_STOCK: "在庫あり",
  OUT_OF_STOCK: "在庫なし",
};

/* 特定商品の在庫を検索する処理*/
const findProductById = (products, targetId) => {
  const product = products.find((product) => product.id === targetId);
  if (!product) return;

  return {
    id: product.id,
    status:
      product.stock === 0 ? STOCK_STATUS.IN_STOCK : STOCK_STATUS.OUT_OF_STOCK,
    taxIncluded: product.price * TAX_RATE,
  };
};

const result = findProductById(products, 2);
console.log(result);
