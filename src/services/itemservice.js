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

      // return mock data
      return catalog;
    }

    saveItem(item) {
  }

    getItemDetails(id) {
  }
}

export default ItemService;
