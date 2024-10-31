// 問題：ECサイトの注文データを分析する
const orders = [
  {
    id: "A001",
    customer: { id: 1, name: "田中太郎", rank: "gold" },
    items: [
      { name: "コーヒー", price: 500, quantity: 2 },
      { name: "紅茶", price: 400, quantity: 1 },
    ],
    status: "delivered",
    note: "営業日配送",
  },
  {
    id: "A002",
    customer: { id: 2, name: "山田花子", rank: "silver" },
    items: [
      { name: "コーヒー", price: 500, quantity: 1 },
      { name: "緑茶", price: 300, quantity: 3 },
    ],
    status: "preparing",
    note: null,
  },
  {
    id: "A003",
    customer: { id: 1, name: "田中太郎", rank: "gold" },
    items: [{ name: "緑茶", price: 300, quantity: 2 }],
    status: "delivered",
    note: "",
  },
];

/* 要件：
1. Object.entries(): 各顧客の総注文金額を計算
2. push(): 商品ごとの販売数を集計
3. some(): 特定の商品（例：コーヒー）を含む注文のみ抽出
4. join(): 注文情報を文字列形式でフォーマット
5. reduce(): 合計売上を計算

出力イメージ:
{
  customerTotals: { "田中太郎": 1100, "山田花子": 1400 },
  productQuantities: [
    { name: "コーヒー", total: 3 },
    { name: "紅茶", total: 1 },
    { name: "緑茶", total: 5 }
  ],
  coffeeOrders: ["A001", "A002"],
  orderSummaries: ["注文A001: 1400円 (田中太郎)", "注文A002: 1400円 (山田花子)", ...],
  totalRevenue: 3900
}
*/
