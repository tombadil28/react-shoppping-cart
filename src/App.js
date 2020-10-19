import React from 'react';
/*import data from "./data.json"; */
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from "./store";
import { Provider } from 'react-redux';

//feature 1
class App extends React.Component {
  

  
 /* Seid redux ist es in productactions.js
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a, b) =>
        sort === "lowest"
         ?a.price > b.price 
         ? 1 
         : -1
         :sort === "highest" 
         ? a.price < b.price 
         ? 1 
         : -1 
         :a._id < b._id 
         ? 1 
         : -1
         ),
    }));
   }
  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }

  };
 */
  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter> </Filter>
              
              <Products>
                                  
              </Products>
            </div>
            <div className="sidebar"> 
            
            <Cart/>
            </div>
          </div>
        </main>
        <footer>  All right is reserved (TG)  </footer>
      </div>
    </Provider>
      
    );
  
  }
}

export default App;


/*  div <filter> count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} 
                
 div  <products>  products={this.state.products}
                
                */