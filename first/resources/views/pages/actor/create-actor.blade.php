@extends('pages.actor.form-actor')

@section('caption')
    <h2>Добавить нового пользователя</h2>
@endsection

@section('handler-submit')
    (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        fetch(
            '{{route('create-actor')}}',
            {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'X-CSRF-TOKEN': '<?php echo csrf_token(); ?>'
                }
            }
        )
    }
@endsection