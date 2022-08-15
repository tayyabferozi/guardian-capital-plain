// window.addEventListener("load", () => {
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
  $(`[data-target="${[$(this).attr("data-target")]}"]`).addClass("active");
  console.log($($(this).attr("data-target")));
  $(".data-tables table").css("display", "none");
  $($(this).attr("data-target")).css("display", "table");
});

const dailyNavTable1 = $(".daily-nav-table").eq(0).DataTable({ paging: false });
const dailyNavTable2 = $(".daily-nav-table").eq(1).DataTable({ paging: false });

const performanceTable1 = $(".performance-table")
  .eq(0)
  .DataTable({ paging: false });
const performanceTable2 = $(".performance-table")
  .eq(1)
  .DataTable({ paging: false });

const distributionsTable1 = $(".distributions-table").eq(0).DataTable({
  paging: false,
});
const distributionsTable2 = $(".distributions-table").eq(1).DataTable({
  paging: false,
});

$("#search-funds").keyup(function () {
  const $thisVal = $(this).val();
  dailyNavTable1.search($thisVal).draw();
  dailyNavTable2.search($thisVal).draw();
  performanceTable1.search($thisVal).draw();
  performanceTable2.search($thisVal).draw();
  distributionsTable1.search($thisVal).draw();
  distributionsTable2.search($thisVal).draw();
});

$(".tabs .tab").click(function (e) {
  const $this = $(e.target);

  $(".tabs .tab").removeClass("active");
  $(".data-tables-with-filters").css("display", "none");
  $this.addClass("active");
  $($this.attr("data-target")).css("display", "block");
});

$(".filter-box-items > button").click(function () {
  const $this = $(this);
  $this.toggleClass("active");
});

// $(".tabs .tab").click();

$(".fund-series.filter-box-items > button").click(function () {
  let searchQuery = "";
  const activeBtns = $(".fund-series.filter-box-items > button.active");

  if (activeBtns.length > 0) {
    activeBtns.each(function (idx, el) {
      const text = $(el).text().trim();
      searchQuery += "|" + text;
      // searchQuery += "|\\b" + text + "\\b";
    });
    searchQuery = searchQuery.substring(1);
    // searchQuery = "(" + searchQuery + ")";
    searchQuery = "(^" + searchQuery + "$)";

    console.log(searchQuery);

    dailyNavTable1.columns([2]).search(`${searchQuery}`, true, false).draw();
    distributionsTable1
      .columns([1])
      .search(`${searchQuery}`, true, false)
      .draw();
    performanceTable1
      .columns([14])
      .search(`${searchQuery}`, true, false)
      .draw();
  } else {
    dailyNavTable1.columns([2]).search("").draw();
    distributionsTable1.columns([1]).search("").draw();
    performanceTable1.columns([14]).search("").draw();
  }
});

// $(".etf-hedged.filter-box-items > button").click(function () {
//   let searchQuery = "";
//   const activeBtns = $(".etf-hedged.filter-box-items > button.active");

//   if (activeBtns.length > 0) {
//     activeBtns.each(function (idx, el) {
//       const text = $(el).text().trim();
//       searchQuery += "|" + text;
//       // searchQuery += "|\\b" + text + "\\b";
//     });
//     searchQuery = searchQuery.substring(1);
//     // searchQuery = "(" + searchQuery + ")";
//     searchQuery = "(^" + searchQuery + "$)";

//     console.log(searchQuery);

//     dailyNavTable2.columns([7]).search(`${searchQuery}`, true, false).draw();
//     performanceTable2.columns([4]).search(`${searchQuery}`, true, false).draw();
//     distributionsTable2
//       .columns([7])
//       .search(`${searchQuery}`, true, false)
//       .draw();
//   } else {
//     dailyNavTable2.columns([7]).search("").draw();
//     performanceTable2.columns([4]).search("").draw();
//     distributionsTable2.columns([7]).search("").draw();
//   }
// });

$(".journey-list.filter-box-items > button").click(function () {
  let searchQuery = "";
  const activeBtns = $(".journey-list.filter-box-items > button.active");

  if (activeBtns.length > 0) {
    activeBtns.each(function (idx, el) {
      const text = $(el).text().trim();
      searchQuery += "|" + text[0];
    });
    searchQuery = searchQuery.substring(1);
    searchQuery = "(^" + searchQuery + "$)";

    console.log(searchQuery);

    dailyNavTable1.columns([1]).search(`${searchQuery}`, true, false).draw();
    performanceTable1
      .columns([13])
      .search(`${searchQuery}`, true, false)
      .draw();
    distributionsTable1
      .columns([7])
      .search(`${searchQuery}`, true, false)
      .draw();
  } else {
    dailyNavTable1.columns([1]).search("").draw();
    performanceTable1.columns([13]).search("").draw();
    distributionsTable1.columns([7]).search("").draw();
  }
});

$(".etf-journey-list.filter-box-items > button").click(function () {
  let searchQuery = "";
  const activeBtns = $(".etf-journey-list.filter-box-items > button.active");

  if (activeBtns.length > 0) {
    activeBtns.each(function (idx, el) {
      const text = $(el).text().trim();
      searchQuery += "|" + text[0];
    });
    searchQuery = searchQuery.substring(1);
    searchQuery = "(^" + searchQuery + "$)";

    console.log(searchQuery);

    dailyNavTable2.columns([1]).search(`${searchQuery}`, true, false).draw();
    performanceTable2.columns([3]).search(`${searchQuery}`, true, false).draw();
    distributionsTable2
      .columns([2])
      .search(`${searchQuery}`, true, false)
      .draw();
  } else {
    dailyNavTable2.columns([1]).search("").draw();
    performanceTable2.columns([3]).search("").draw();
    distributionsTable2.columns([2]).search("").draw();
  }
});

$(".assets-list input").change(function () {
  let searchQuery = "";
  const activeInputs = $(".assets-list input:checked");

  if (activeInputs.length > 0) {
    activeInputs.each(function (idx, el) {
      const text = $(el).attr("id").replace(/-/g, " ").replace(/_/g, ".");
      searchQuery += "|" + text;
    });
    searchQuery = searchQuery.substring(1);
    searchQuery = "(^" + searchQuery + "$)";

    console.log(searchQuery);

    dailyNavTable1.columns([4]).search(`${searchQuery}`, true, false).draw();
    performanceTable1
      .columns([12])
      .search(`${searchQuery}`, true, false)
      .draw();
    distributionsTable1
      .columns([6])
      .search(`${searchQuery}`, true, false)
      .draw();
  } else {
    dailyNavTable1.columns([4]).search("").draw();
    performanceTable1.columns([12]).search("").draw();
    distributionsTable1.columns([6]).search("").draw();
  }
});

$(".etf-assets-list input").change(function () {
  let searchQuery = "";
  const activeInputs = $(".etf-assets-list input:checked");

  console.log(activeInputs);

  if (activeInputs.length > 0) {
    activeInputs.each(function (idx, el) {
      const text = $(el)
        .attr("id")
        .replace(/etf-/g, "")
        .replace(/-/g, " ")
        .replace(/_/g, ".");
      searchQuery += "|" + text;
    });
    searchQuery = searchQuery.substring(1);
    searchQuery = "(^" + searchQuery + "$)";

    console.log(searchQuery);

    dailyNavTable2.columns([4]).search(`${searchQuery}`, true, false).draw();
    performanceTable2.columns([2]).search(`${searchQuery}`, true, false).draw();
    distributionsTable2
      .columns([1])
      .search(`${searchQuery}`, true, false)
      .draw();
  } else {
    dailyNavTable2.columns([4]).search("").draw();
    performanceTable2.columns([2]).search("").draw();
    distributionsTable2.columns([1]).search("").draw();
  }
});
// });

$(".fund-group-select-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if (!$this2.hasClass("active")) {
        $this2.click();
      }
    });
});

$(".fund-group-clear-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if ($this2.hasClass("active")) {
        $this2.click();
      }
    });
});

$(".asset-class-select-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find("input[type='checkbox']")
    .each(function (idx, el) {
      const $this2 = $(el);

      if (!$this2.is(":checked")) {
        $this2.click();
      }
    });
});

$(".asset-class-clear-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find("input[type='checkbox']")
    .each(function (idx, el) {
      const $this2 = $(el);
      console.log($this.is(":checked"));

      if ($this2.is(":checked")) {
        $this2.click();
      }
    });
});

$(".fund-series-select-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if (!$this2.hasClass("active")) {
        $this2.click();
      }
    });
});

$(".fund-series-clear-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if ($this2.hasClass("active")) {
        $this2.click();
      }
    });
});

$(".hedged-select-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if (!$this2.hasClass("active")) {
        $this2.click();
      }
    });
});

$(".hedged-clear-all").click(function () {
  const $this = $(this);

  $this
    .parents(".card")
    .find(".filter-box-item")
    .each(function (idx, el) {
      const $this2 = $(el);

      if ($this2.hasClass("active")) {
        $this2.click();
      }
    });
});
