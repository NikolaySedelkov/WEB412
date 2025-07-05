@php
    use App\Models\Actor;
    use App\Models\Film;
@endphp

<h1>
    ORM - Object Relation Model - мост, позволяющий использовать сущности БД, как классы из ООП
</h1>

<h1>
    JOIN
</h1>

@php
    $filmWithActor = Film::join(
        'actor', 
        'actor.actor_id', 
        '=',
        'film.language_id'
    )->limit(15)->get([
        DB::raw('concat(first_name, \' \', last_name) as actor_full_name'),
        'title'
    ]);
@endphp

<h3>
    <table>
        <caption>Самый главный актер фильма(ТИПА)</caption>
        <tbody>
            @foreach ($filmWithActor as $group)
                <tr>
                    <td>{{ $group['title'] }}</td>
                    <td>{{ $group['actor_full_name'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</h3>

<h1>
    Подзапросы
</h1>

@php
    $filmWithActor = Film::addSelect(
        column: [
            'actor_full_name' => Actor::select([
                DB::raw('concat(first_name, \' \', last_name) as actor_full_name')
            ])->whereColumn('actor_id', '=', 'film.language_id')
        ]
    )->limit(15)->get();
@endphp

<h3>
    <table>
        <caption>Самый главный актер фильма(ТИПА)</caption>
        <tbody>
            @foreach ($filmWithActor as $group)
                <tr>
                    <td>{{ $group['title'] }}</td>
                    <td>{{ $group['actor_full_name'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</h3>

<h1>
    Группировка
</h1>

@php
    $countFilmByRating = Film::groupBy('rating')->select(
        'rating',
        DB::raw('count(*) as total')
    )->get();
@endphp

<h3>
    <table>
        <caption>Полулярность рейтингой фильмов</caption>
        <tbody>
            @foreach ($countFilmByRating as $group)
                <tr>
                    <td>{{ $group['rating'] }}</td>
                    <td>{{ $group['total'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</h3>

<h1>
    @php
        $penelopies = Actor::where('first_name', '=', 'PENELOPE', /*'and'*/)
        /*->where('last_name', '=', 'CRONYN')*/
        ->orderBy('last_name')
        ->get();
    @endphp

    Всего актеров с именем пенелопа: {{ count($penelopies) }}
    <ul>
        @foreach ($penelopies as $actor)
            <li>{{ $actor['first_name'] }} {{ $actor['last_name'] }}</li>   
        @endforeach
    </ul>
</h1>

<h1>
    Всего актеров: {{ count(Actor::get()) }}
    <ul>
        @foreach (Actor::get(['first_name', 'last_name']) as $actor)
            <li>{{ $actor['first_name'] }} {{ $actor['last_name'] }}</li>   
        @endforeach
    </ul>
</h1>