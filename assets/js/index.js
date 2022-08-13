const setScrolled = () => {
  if (window.pageYOffset > 10) {
    $("#navbar").addClass("scrolled");
  } else {
    $("#navbar").removeClass("scrolled");
  }
};

setScrolled();

$(window).scroll(function (e) {
  setScrolled();
});

const toggleSidebar = () => {
  $(".side-menu").toggleClass("active");
};

$("#menu").click(toggleSidebar);
$(".side-menu .close").click(toggleSidebar);

$(".toggle-next").click(function (e) {
  $(this).next().slideToggle();
});

$("#filter-toggler").click(function () {
  $(".large-filters-wrap.collapse").slideToggle();
});

$(".list-tabs button").click(function (e) {
  $(".list-tabs button").removeClass("active");
  $(e.target).addClass("active");
  $(".data-tables table").css("display", "none");
  $($(this).attr("data-target")).css("display", "table");
});

// let dailyNavMarkup = "";

// data1.forEach((el, idx) => {
//   const { name, type, series, date, assetClass, navPerUnit, navChange } = el;

//   dailyNavMarkup += `
//             <tr>
//               <td style="min-width: 150px">${name}</td>
//               <td>
//                 <div className="tag blue">${type}</div>
//               </td>
//               <td>
//                 <div className="tag">${series}</div>
//               </td>
//               <td>${date}</td>
//               <td>${assetClass}</td>
//               <td>${navPerUnit}</td>
//               <td>${navChange}</td>
//             </tr>
//   `;
// });

// $("#daily-nav tbody").html(dailyNavMarkup);

$("#daily-nav").dataTable({ paging: false, search: false });

// let performanceMarkup = "";

// data2.forEach((el, idx) => {
//   const { name, date, m1, m3, m6, ytd, y1, y3, y5, y10, si, siDate } = el;

//   performanceMarkup += `
//             <tr>
//               <td style="min-width: 150px">${name}</td>
//               <td>${date}</td>
//               <td>${m1}</td>
//               <td>${m3}</td>
//               <td>${m6}</td>
//               <td>${ytd}</td>
//               <td>${y1}</td>
//               <td>${y3}</td>
//               <td>${y5}</td>
//               <td>${y10}</td>
//               <td>${si}</td>
//               <td>${siDate}</td>
//             </tr>
//   `;
// });

// $("#performance-table tbody").html(performanceMarkup);

$("#performance-table").dataTable({ paging: false, search: false });

// let distributionsMarkup = "";

// data3.forEach((el, idx) => {
//   const { name, series, freq, date, amount, ytd } = el;

//   distributionsMarkup += `
//             <tr>
//               <td style="min-width: 150px">${name}</td>
//               <td>
//                 <div className="tag">${series}</div>
//               </td>
//               <td>${freq}</td>
//               <td>${date}</td>
//               <td>${amount}</td>
//               <td>${ytd}</td>
//             </tr>
//   `;
// });

// $("#distributions-table tbody").html(distributionsMarkup);

$("#distributions-table").dataTable({ paging: false, search: false });
