<form id='form-actor-controll'>
    <table>
        <caption>
            @yield('caption')
        </caption>

        <tbody>
            <tr>
                <td>Имя</td>
                <td>
                    <input
                        name='first-name'
                        type='text'
                        required
                        value="@yield('default-first-name')"
                    />
                </td>
            </tr>

            <tr>
                <td>Фамилия</td>
                <td>
                    <input
                        name='last-name'
                        type='text'
                        required
                        value="@yield('default-last-surname')"
                    />
                </td>
            </tr>
        </tbody>
        
    </table>
    <button>Сохранить</button>
</form>

<script>
    document.getElementById('form-actor-controll').addEventListener(
        'submit', @yield('handler-submit')
    );
</script>