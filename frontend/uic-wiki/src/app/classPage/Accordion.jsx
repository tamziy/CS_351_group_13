import React from 'react';
import "./Accordion.css";

export default function Accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    return (

        <div>
            <button className="accordion">Section 1</button>
            <div className="panel">
                <p>Lorem ipsum...</p>
            </div>

            <button className="accordion">Section 2</button>
            <div className="panel">
                <p>Lorem ipsum...</p>
            </div>

            <button className="accordion">Section 3</button>
            <div className="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>


    );
}
