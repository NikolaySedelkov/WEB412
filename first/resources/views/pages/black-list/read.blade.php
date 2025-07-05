@php
    use App\Models\BlackList;
@endphp

<div>
    <table>
        <caption>Черный список</caption>
        <tbody>
            @foreach(BlackList::all() as $itemBlackList)
                <tr>
                    <td>
                        {{ $itemBlackList['id_user'] }}
                    </td>
                    <td>
                        {{ $itemBlackList['ip'] }}
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>