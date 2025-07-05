@extends('pages.actor.form-actor')

@section('default-first-name', $actor->first_name )
@section('default-first-name', $actor->last_name )

@section('handler-submit')
    (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        formData.append('id', <?php echo $actor->actor_id; ?>);

        fetch(
            '/actor/<?php echo $actor->actor_id; ?>',
            {
                method: 'PUT',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'X-CSRF-TOKEN': '<?php echo csrf_token(); ?>'
                }
            }
        )
    }
@endsection