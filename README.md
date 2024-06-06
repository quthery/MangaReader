<style>
.command {
    background-color: gray;
    padding: 4px 8px;
    border-radius: 2px;
    font-size: 18px;
    color: rgb(33, 33, 33);
}
</style>
<h1>Как развернуть проект</h1>
<h2>1. Клонировать репозиторий</h2>
<h4>
    Переходим в каталог где будем разворачивать<br />наш репозиторий,
    и прописываем следующию команду.
</h4>
<span class="command">
    git clone https://github.com/quthery/MangaReader.git
</span>
<h2>2. Установить зависимости/библиотеки</h2>
<h4>
    Открываем терминал в папке с проектом.
</h4>
<h3>
    2.1.Установка виртуального окружения
</h3>
<h4>
    Устанавливаем виртуальное окружение для питона
</h4>
<h3>
    Если Windows
</h3>
<span class="command">
    python -m venv .venv
</span>
<h4>
    Включаем виртуальное окружение для питона
</h4>
<span class="command">
    .venv\Scripts\activate
</span>
<h3>
    Если Linux/Mac
</h3>
<span class="command">
    python3 -m venv .venv
</span>
<h4>
    Включаем виртуальное окружение для питона
</h4>
<span class="command">
    source .venv/bin/activate
</span>
<h3>
    2.2.Установка библиотек питона
</h3>
<h4>
    Прописываем команду для установки зависимостей
</h4>
<span class="command">
    pip install fastapi uvicorn
</span>
<h3>
    2.3.Установка библиотек js
</h3>
<h3>
    Убедитесь что у вас есть node.js!
</h3>
<h4>
    Устанавливаем библиотеки
</h4>
<span class="command">
    npm i react
</span><br/><br/>
<span class="command">
    npm i axios
</span><br/><br/>
<span class="command">
    npm i react-router-dom
</span>
<h2>3. Запуск проекта</h2>
<h4>
    Открываем терминал, и вводим команду
</h4>
<h3>
    Если Windows
</h3>
<span class="command">
    python main.py
</span>
<h3>
    Если Linux/Mac
</h3>
<span class="command">
    python3 main.py
</span>
<h4>
    Теперь открываем второй терминал<br/>
    в том же репозитории
</h4>
<h4>
    Заходим в папку react-app<br/>
</h4>
<span class="command">
    cd react-app
</span>
<h4>
    Включаем react<br/>
</h4>
<span class="command">
    npm run start
</span>
<h4>
    После этого у вас автоматически должен<br/>
    был быть открыться браузер со страницей
</h4>