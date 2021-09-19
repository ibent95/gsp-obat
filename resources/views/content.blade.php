@php $content = (isset($_GET['content'])) ? $_GET['content'] : 'home' ; @endphp

@if (file_exists('contents/' . $content . '.blade.php'))
	@include('contents/' . $content )
@else
	@include('contents/404')
@endif