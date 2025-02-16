document
    .getElementById('form-file')
    .addEventListener('submit', (e)=>{
        // Event.preventDefault() - Прекратить стандантарный обработчик событие
        e.preventDefault();

        /**
         * new FormData(FORMDOm) -> Данные формы(НЕ объект!)
         */
        const formData = new FormData(e.target);
        
        const file = formData.get('pict');

        // Запуск чтение файла для того, чтобы достать содержимое
        // Создаем объект для чтения
        const reader = new FileReader();

        // Указываем что нужно сделать когд завершиться чтение
        // reader.onload = ()=>{}
        reader.addEventListener('load', (e)=>{
            document.getElementById('pict-preview').src = reader.result;
        });

        // Указываем что нужно прочитать
        reader.readAsDataURL(file);

    }
);