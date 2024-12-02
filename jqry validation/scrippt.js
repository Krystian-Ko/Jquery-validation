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
		},
		errorElement: 'div',
		errorClass: 'error',
		submitHandler: function (form) {
			alert('Formularz wysłany!');
			form.submit();
		},
	});

	// Dodajemy niestandardową metodę walidacji dla hasła
	$.validator.addMethod(
		'passwordCheck',
		function (value, element) {
			return this.optional(element) || /\d/.test(value); // Sprawdzamy, czy hasło zawiera co najmniej jedną cyfrę
		},
		'Hasło musi zawierać co najmniej jedną cyfrę'
	);
});
