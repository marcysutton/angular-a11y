$(document).ready(function(){
	var hamburgerMenu = $('.hamburger-menu');
	$('.hamburger-button').on('click', function(e){
		if(hamburgerMenu.hasClass('active')){
			hamburgerMenu.removeClass('active')
				.find('ul').attr('aria-hidden', true)
				.find('a').attr('tabIndex', '-1');
		}
		else {
			hamburgerMenu.addClass('active')
				.find('ul').attr('aria-hidden', false)
				.find('a').removeAttr('tabIndex');
		}
	});
	var backgrounds = $('.backgrounds').children('.slide-background');
  var boringButton = $('.boring-button');
	var boringResetButton = $('.boring-reset');
	boringButton.on('click', function(e){
		if(e.type === 'click') {
			console.log('DANCE!!!!');
			var section = $(this).closest('section');
			section.addClass('has-background').find('.hidden').addClass('toHide').removeClass('hidden');
			var index = section.index();
			backgrounds.eq(index).css({'background-image': 'url('+ section.data('click-background')+')'});
			boringResetButton.attr({'tabIndex':'0', 'aria-hidden':'false'}).removeClass('disabled');
		}
	});
	boringResetButton.on('click', function(e){
		console.log('reset');
		var parentSection = $(this).closest('section');
		parentSection.removeClass('has-background').find('.toHide').addClass('hidden');
		var index = parentSection.index();
		backgrounds.eq(index).css('background-image','none');

		$(this).attr({'tabIndex':'-1', 'aria-hidden':'true'}).addClass('disabled');
		boringButton.focus();
	});
});
