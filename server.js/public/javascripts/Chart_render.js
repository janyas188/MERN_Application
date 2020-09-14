'use strict';

class Chart_render extends React.Component {
    render() {

        return CE(

            "div",
            { className: "topnav", id: "chart_div" },

            CE("script", { type: "text/javascript", id: "Chart", src: "./javascript/Chart.js" })
            
        );
    }
};
;



const domContainer_Chart = document.querySelector('#Chart_container');
ReactDOM.render(CE(Chart_render), domContainer_Chart);