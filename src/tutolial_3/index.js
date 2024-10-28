// 元データ
const orders = [
  {
    orderId: "A001",
    items: [
      { name: "Tシャツ", quantity: 2, unitPrice: 2000 },
      { name: "パンツ", quantity: 1, unitPrice: 3000 },
    ],
    status: "配送完了",
  },
  {
    orderId: "A002",
    items: [{ name: "スニーカー", quantity: 1, unitPrice: 8000 }],
    status: "処理中",
  },
];

// 要件：
// 1. map()を使って、各注文の合計金額を計算
// 2. 以下のフォーマットに変換:
// - id: 注文ID
// - totalAmount: 合計金額
// - itemCount: 商品アイテムの合計個数

/* 回答 */

/* 税の値 */
const TAX_RATE = 0.1;

/*  合計金額計算 */
const calculateTotalAmount = (items) => {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
};

/*  合計数量計算 */
const calculateTotalItems = (items) => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const calculateData = orders.map((order) => {
  return {
    id: order.orderId,
    totalAmount: calculateTotalAmount(order.items),
    itemCount: calculateTotalItems(order.items) * (1 + TAX_RATE),
  };
});
console.log(calculateData);
