$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');
  });
});

///////////

$(function() {
  $('.verkooppuntenbtn').click(function() {
    $(this).toggleClass('up');

    $('.verkooppunten').toggleClass('hidden');

    var text = $('.verkooptekst').text();
    $('.verkooptekst').text(
        text == "Toon alle verkooppunten" ? "Verberg alle verkooppunten" : "Toon alle verkooppunten");
  });
});
