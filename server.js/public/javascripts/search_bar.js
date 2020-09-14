'use strict';
const CE = React.createElement;

class SearchBar extends React.Component {
    render() {

        return CE(

            "div",
            { className: "topnav" },

            CE("input", { type: "text", id: "name", placeholder: "Search.." })

        );
    }
};



const domContainer_SearchBar = document.querySelector('#search_bar_container');
ReactDOM.render(CE(SearchBar), domContainer_SearchBar);