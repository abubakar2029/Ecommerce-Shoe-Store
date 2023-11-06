const express = require("express");

const app = express();
/* ----uuid-generate-------- */
const { v4: uuidv1 } = require("uuid");

app.use(express.json());
/* -------------------- Brand-data--------------------------------- */
let adidas = [
  {
    img: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3a891ce267b4b158f6747d299725f42_9366/Ultraboost_1.0_Shoes_Turquoise_ID9673_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/061cbd13f49e4d889855140661882412_9366/Ultraboost_1.0_Shoes_Turquoise_ID9673_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ccc9a188a1442b8aee196fae20fef1f_9366/Ultraboost_1.0_Shoes_Turquoise_ID9673_03_standard.jpg",
    ],
    title: "ULTRABOOST 1.0 SHOES",
    id: uuidv1(),
    price: 190,
    discount: 5,
    size: 0,
  },
  {
    img: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c19776057ae42f5a488af730136781a_9366/Becky_Sauerbrunn_Ultraboost_1.0_Shoes_Black_GY7485_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a62d6f52c284be3bd3daf730136fb3d_9366/Becky_Sauerbrunn_Ultraboost_1.0_Shoes_Black_GY7485_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eec01029aa441ccb5f3af7301373c0f_9366/Becky_Sauerbrunn_Ultraboost_1.0_Shoes_Black_GY7485_02_standard.jpg",
    ],
    id: uuidv1(),
    title: "ULTRABOOST 1.0 SHOES",
    price: 200,
    discount: 12,
    size: 0,
  },
  {
    img: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7be716def58143c7b09bef9dfa69f604_9366/Ultraboost_1.0_Shoes_Black_ID9682_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b847aa336344127b2d8b4d77032c32b_9366/Ultraboost_1.0_Shoes_Black_ID9682_02_standard_hover.jpg",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb1a170e-bca1-4589-91f7-a8fa79315d99/dunk-low-mens-shoes-C0N2DF.png",
    ],
    title: "ULTRABOOST 1.0 SHOES",
    id: uuidv1(),
    price: 150,
    discount: 5,
    size: 0,
  },
];
let nike = [
  {
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/47b5e2f1-aa3d-4ed2-bb5e-e902bb756841/dunk-low-mens-shoes-C0N2DF.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e210ce8c-f264-4178-932c-ac53ca8dfa7d/dunk-low-mens-shoes-C0N2DF.png",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18b80548a11743b8ba751314cca396f1_9366/Ultraboost_1.0_Shoes_Black_ID9682_03_standard.jpg",
    ],
    size: 0,
    title: "Nike Dunk Low",
    id: uuidv1(),
    price: 120,
    discount: 5,
  },
];
let service = [
  {
    img: [
      "https://www.servis.pk/cdn/shop/files/M-LF-0200341.jpg?v=1691382359",
      "https://www.servis.pk/cdn/shop/files/M-LF-0200341_2_398cb6bd-9c7d-4b58-958a-6ac06168d992.jpg?v=1691382377",
      "https://www.servis.pk/cdn/shop/files/M-LF-0200341_1_39cf03e2-2bd7-49b4-8a6c-047b4a32ba12.jpg?v=1691382377",
    ],
    size: 0,
    title: "M-LF-0200341-BOOTS",
    price: 7999,
    discount: 10,
    id: uuidv1(),
  },
  {
    img: [
      "https://www.servis.pk/cdn/shop/files/M-LF0200341.jpg?v=1691382319",
      "https://www.servis.pk/cdn/shop/files/M-LF0200341_2.jpg?v=1691382346",
      "https://www.servis.pk/cdn/shop/files/M-LF0200341_1.jpg?v=1691382346",
    ],
    size: 0,
    title: "M-LF-0200341-BOOTS",
    price: 6999,
    discount: 5,
    id: uuidv1(),
  },
];

let brands = {
  adidas,
  nike,
  service,
};
/* ----------------------End---------------------------------------- */

// ---------Request-Section
app.post("/get-brand-data", (req, resp) => {
  console.log(req.body);
  resp.send(brands[req.body.brandName]);
});
/* --------------------- */

/* -------temp-data---------- */
let tempA = [];
app.post("/tempData", (req, res) => {
  console.log(req.body);
  tempA = req.body;
  res.send(tempA);
});
/* ---------------------------- */
/* -----sending-allProducts--------- */
let allProducts = []; //combining all products
for (const oneKey in brands) {
  allProducts = [...allProducts, ...brands[oneKey]];
}
app.post("/products-data", (req, res) => {
  res.send(allProducts);
});
/* ------------------------------ */

/* ------selected-card--------- */
app.post("/selected-card", (req, res) => {
  let selectedProduct = null;
  for (const oneKey in brands) {
    //hr bar aak brand-array aakr gira ga yahan
    for (let i = 0; i < brands[oneKey].length; i++) {
      if (brands[oneKey][i].id == req.body.id) {
        //yahan brand-array ka object ma id ko search kra ga
        selectedProduct = brands[oneKey][i];
        break;
      }
    }
  }
  res.send(selectedProduct);
});

/* orders */
let allOrders = [];
app.post("/set-confirm-orders", (req, res) => {
  allOrders = [...allOrders, ...req.body];
});
app.post("/get-confirm-orders", (req, res) => {
  res.send(allOrders);
  console.log("GEt", allOrders);
});

/* "/add-to-cart"-------------- */
let allCart = [];
app.post("/add-to-cart", (req, res) => {
  let item = req.body;
  allCart.push(item);
  let message = `${item.title} added to your cart`;
  res.send(message);
});

app.post("/removeItem", (req, res) => {
  allCart.splice(req.body, 1); //yahan body ma aak index aay ga
  res.send("Product removed");
});
/* ---- */
/* "/get-cart"-------------- */
app.post("/get-cart", (req, res) => {
  let bill = 0;
  for (const item of allCart) {
    bill += item.price;
  }
  const cartData = { bill: bill, allCart };
  res.send(cartData);
});
/* ---- */

/* all-signup */
let users = [];
/*  */
app.post("/user-signup", (req, res) => {
  users.push(req.body);
  console.log("users", users);
  res.send("Welcome,You are Resgistered");
});
/* ------------ */
/* user-login---------- */
app.post("/user-login", (req, res) => {
  let userFound = false;
  for (const user of users) {
    if (
      req.body.password == user.password &&
      req.body.username == user.username
    ) {
      userFound = true;
      break;
    }
  }

  res.send(userFound ? "Successfully Logged In" : "Not Found");
});

app.use(express.static("./build"));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
