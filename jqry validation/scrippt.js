$(document).ready(function () {
	$('#receiveEmails').change(function () {
		if ($(this).is(':checked')) {
			$('#emailPreferences').show();
		} else {
			$('#emailPreferences').hide();
		}
	});

	$('#contactForm').validate({
		rules: {
			username: {
				required: true,
				minlength: 3,
			},
			password: {
				required: true,
				minlength: 4,
				passwordCheck: true,
			},
			confirm_password: {
				required: true,
				equalTo: "[name='password']",
			},
			policy: {
				required: true,
			},
		},
		messages: {
			username: {
				required: 'Proszę podać nazwę użytkownika',
				minlength: 'Nazwa użytkownika musi mieć co najmniej 3 znaki',
			},
			password: {
				required: 'Proszę podać hasło',
				minlength: 'Hasło musi mieć co najmniej 4 znaki',
				passwordCheck: 'Hasło musi zawierać co najmniej jedną cyfrę',
			},
			confirm_password: {
				required: 'Proszę powtórzyć hasło',
				equalTo: 'Hasła muszą się zgadzać',
			},
			policy: {
				required: 'To pole jest wymagane',
			},
		},
		errorElement: 'div',
		errorClass: 'error',
		errorPlacement: function (error, element) {
			if (element.attr('name') == 'policy') {
				error.insertAfter(element.next('span'));
			}
			else {
				error.insertAfter(element);
			}
		},
		submitHandler: function (form) {
			alert('Formularz wysłany!');
			form.submit();
		},
	});

	$.validator.addMethod(
		'passwordCheck',
		function (value, element) {
			return /\d/.test(value);
		},
		'Hasło musi zawierać co najmniej jedną cyfrę'
	);
});
