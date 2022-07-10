// import { useEffect } from "react";

// export default function nva() {
//   const openDropdown = () => {};

//   useEffect(() => {
//     window.$ = window.jQuery = require("jquery");
//     const jQuery = require("jquery");

//     (function ($) {
//       // Begin jQuery
//       $(function () {
//         // DOM ready
//         // If a link has a dropdown, add sub menu toggle.
//         // $("nav ul li a:not(:only-child)").click(function (e) {
//         //   console.log(e)
//         //   console.log($(this).siblings(".nav-dropdown"))
//         //   // $(this).siblings(".nav-dropdown").toggle();
//         //   // Close one dropdown when selecting another
//         //   // $(".nav-dropdown").not($(this).siblings()).hide();
//         //   // e.stopPropagation();
//         // });
//         // Clicking away from dropdown will remove the dropdown class
//         $("html").click(function () {
//           $(".nav-dropdown").hide();
//         });
//         // Toggle open and close nav styles on click
//         $("#nav-toggle").click(function () {
//           $("nav ul").slideToggle();
//         });
//         // Hamburger to X toggle
//         $("#nav-toggle").on("click", function () {
//           this.classList.toggle("active");
//         });
//       }); // end DOM ready
//     })(jQuery); // end jQuery
//   }, []);

//   return (
//     <>
//       <section className="navigation">
//         <div className="nav-container">
//           <div className="brand">
//             <a href="#!">Logo</a>
//           </div>
//           <nav>
//             <div className="nav-mobile">
//               <a id="nav-toggle" href="#!">
//                 <span></span>
//               </a>
//             </div>
//             <ul className="nav-list">
//               <li>
//                 <a href="#!">Home</a>
//               </li>
//               <li>
//                 <a href="#!">About</a>
//               </li>
//               <li>
//                 <a href="#!" onClick={openDropdown}>
//                   Services
//                 </a>
//                 <ul className="nav-dropdown">
//                   <li>
//                     <a href="#!">Web Design</a>
//                   </li>
//                   <li>
//                     <a href="#!">Web Development</a>
//                   </li>
//                   <li>
//                     <a href="#!">Graphic Design</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#!">Pricing</a>
//               </li>
//               <li>
//                 <a href="#!">Portfolio</a>
//                 <ul className="nav-dropdown">
//                   <li>
//                     <a href="#!">Web Design</a>
//                   </li>
//                   <li>
//                     <a href="#!">Web Development</a>
//                   </li>
//                   <li>
//                     <a href="#!">Graphic Design</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#!">Contact</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </section>

//       <article>
//         <h2>Navigation</h2>
//         <p>Responsive Dropdown Navigation Bar.</p>
//         <p>
//           Want to see how it's made?{" "}
//           <a href="http://www.taniarascia.com/responsive-dropdown-navigation-bar/">
//             Read the tutorial!
//           </a>
//         </p>
//       </article>
//     </>
//   );
// }
