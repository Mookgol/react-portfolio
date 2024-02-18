import React, { useEffect } from "react";
import "./UpArrow.css";
function UpArrow() {
  useEffect(() => {
    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after component mounts

  // Function to scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return <div id="myBtn" onClick={topFunction}></div>;
}
export default UpArrow;
