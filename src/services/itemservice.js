import axios from "axios";

var catalog = [

  {
    _id: "Mari",
    title: "Peach Cresendo",
    catagory: "Hybrid",
    price: 40.0,
    image: "peach.jpg",
    minimum: 1,
    weight: "3.5oz",
  },
  {
    _id: "juana",
    title: "Cresendo",
    catagory: "Indica",
    price: 50.0,
    image: "peach.jpg",
    minimum: 1,
    weight: "5oz",
  },
  {
    _id: "ana",
    title: "Peach",
    catagory: "Sativa",
    price: 45.0,
    image: "peach.jpg",
    minimum: 1,
    weight: "6oz",
  },
];

class ItemService {
    
    getCatalog() {
      //  put logice to call server
      // and get an array of products
    axios.get('http://127.0.0.1:5000/api/catalog')
      // return mock data
      return catalog;
    }

    saveItem(item) {
      console.log("ToDo: send object to server");
  }

    getItemDetails(id) {
  }
}

export default ItemService;
