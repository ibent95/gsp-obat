import 'lodash';
import 'bootstrap';
import Swal from 'sweetalert2';

const boortapModal = document.getElementById('bootstrapModal');
boortapModal?.addEventListener('show.bs.modal', function (event: Event) {
	// Button that triggered the modal
	const button = event.relatedTarget;
	// Extract info from data-bs-* attributes
	const recipient = button.getAttribute('data-bs-whatever');
	// If necessary, you could initiate an AJAX request here
	// and then do the updating in a callback.

	// Update the modal's content.
	let modalTitle = boortapModal.querySelector('.modal-title');
	let modalBodyInput = boortapModal.querySelector('.modal-body input');

	modalTitle.textContent = 'New message to ' + recipient;
	modalBodyInput.value = recipient;
});

const sweetalertButton = document.getElementById('sweetalertButton');
sweetalertButton?.addEventListener('click', function (this: HTMLElement) {
	Swal.fire({
		title: 'Error!',
		text: 'Do you want to continue',
		icon: 'error',
		confirmButtonText: 'Cool'
	});
});