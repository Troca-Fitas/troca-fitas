window.onload = function() {
  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ];

  const colorBtns = colors.map((color) => {
    return `<li data-color=\"${color}\" style=\"background-color: ${color}\"></li>`;
  });

  const target = $('.btn-color-picker').siblings().children();
  target.append(colorBtns);

  $('.color-picker li').on("click", function(event) {
    $(this).parents('.picker-wrapper').find(".btn-color-picker").addClass("clean-text");
    let color = event.target.attributes[0].value;
    $(this).parents('.picker-wrapper').find(".btn-color-picker").css("background-color", color);
    $(this).parents('.collapse').removeClass("show");
    $(this).parents('.picker-wrapper').find('.btn-delete').removeClass("hide").addClass("show");
  });

  $('.btn-delete').on("click", function() {
    $(this).addClass("hide");
    $(this).parent().siblings(".color-picker-wrapper").children(".btn-color-picker").removeClass("clean-text").attr("aria-expanded", "false").css("background-color", "");
  });
}


