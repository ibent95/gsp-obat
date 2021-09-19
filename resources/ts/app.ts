import 'lodash';
import Swal from 'sweetalert2';

const boortapModal = document.getElementById('bootstrapModal');
boortapModal?.addEventListener('show.bs.modal', function (this: HTMLElement, event: Event) {
	const recipient = 'Ibnu' ;
	// If necessary, you could initiate an AJAX request here
	// and then do the updating in a callback.

	// Update the modal's content.
	let modalTitle = boortapModal.querySelector('.modal-title') as HTMLHeadingElement;
	let modalBodyInput = boortapModal.querySelector('.modal-body input') as HTMLInputElement;

	// Change value
	modalTitle.textContent = 'New message to ' + recipient;
	modalBodyInput.value = recipient || '';
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