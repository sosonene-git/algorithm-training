// 元データ
const orders = [
  {
    orderId: "A001",
    items: [
      { productId: 1, name: "キーボード", price: 8000, quantity: 2 },
      { productId: 2, name: "マウス", price: 4000, quantity: 1 },
    ],
    status: "pending",
    customerType: "regular",
  },
  {
    orderId: "A002",
    items: [{ productId: 3, name: "モニター", price: 40000, quantity: 1 }],
    status: "completed",
    customerType: "premium",
  },
  {
    orderId: "A003",
    items: [
      { productId: 1, name: "キーボード", price: 8000, quantity: 1 },
      { productId: 4, name: "USBハブ", price: 3000, quantity: 3 },
    ],
    status: "pending",
    customerType: "premium",
  },
];

/*
要件：
1. map()を使用して、各注文に以下の情報を追加してください：
   - totalAmount: 注文内の全商品の合計金額
   - itemCount: 注文内の商品アイテム数の合計
   - discountRate: customerTypeが'premium'の場合は0.1、'regular'の場合は0

2. filter()を使用して、以下の条件に合う注文のみを抽出してください：
   - status が 'pending' である
   - totalAmount が 10000円以上である
*/

//オーダー型定義
type OrderType = {
  orderId: string;
  items: {
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  status: string;
  customerType: string;
};

//オーダー型に、金額合計、数量合計、顧客レートの新たな情報を追加したオーダの型定義
type EnhancedOrderType = OrderType & {
  totalAmount: number;
  itemCount: number;
  discountRate: number;
};

// 定数として割引率を設定
const PREMIUM_RATE = 0.1;
const REGULAR_RATE = 0;

/** 
 * 各注文に totalAmount, itemCount, discountRate を追加する
 * 出力イメージ
 * [
 *   {
 *     orderId: "A001",
 *     items: [...],
 *     status: "pending",
 *     customerType: "regular",
 *     totalAmount: 20000,
 *     itemCount: 3,
 *     discountRate: 0
 *   }
 * ]
 * */
const enhanceOrders = (orders: OrderType[]): EnhancedOrderType[] => {
  return orders.map((order) => {
    //注文ごとの合計金額算出
    const totalAmount = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    //注文ごとの合計数量算出
    const itemCount = order.items.reduce((count, item) => count + item.quantity, 0);

    //顧客のレート
    const discountRate = order.customerType === "premium" ? PREMIUM_RATE : REGULAR_RATE;

    return {
      ...order,
      totalAmount,
      itemCount,
      discountRate,
    };
  });
};

// 条件に合う注文を抽出する
const filterOrders = (orders: EnhancedOrderType[]): EnhancedOrderType[] => {
  return orders.filter(
    (order) => order.status === "pending" && order.totalAmount >= 10000
  );
};