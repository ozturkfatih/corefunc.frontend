import $ from 'jquery';
import App from './components/ComponentSample';
let Arabeni = App();
$(document).ready(function () {
    let div = $('<div/>');
    div.html('jQuery Div element.').appendTo('.jqSelector');

    let flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    $.getJSON( flickerAPI, {
        tags: 'mount rainier',
        tagmode: 'any',
        format: 'json'
    })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( '<img>' ).attr( 'src', item.media.m ).appendTo( '#images' );
        if ( i === 3 ) {
          return false;
        }
      });
    });
});

