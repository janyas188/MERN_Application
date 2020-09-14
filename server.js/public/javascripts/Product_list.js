'use strict';
   
const Titles = ['movies', 'games', 'music']
const productTitles = Titles.map((title, index) =>
    CE("h1", { key: index }, title),);

class ProductList extends React.Component {

    render() {

        return CE(React.Fragment,null,

            CE("div",
            { className: "topnav" },

            CE("h2", null, "Welcome to the Product Page")),
            CE('div', { className: "container" },
                CE('div', { className: "card"}, productTitles)));
    }
};



const domContainer_ProductList = document.querySelector('#Product_List_container');
ReactDOM.render(CE(ProductList), domContainer_ProductList);