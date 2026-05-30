import React from "react";
import "./life.css";

export default function Life() {

    return (

        <div className="life">

            <header className="header">

                <div className="headerLeft">

                    <div className="avatar">
                        🧑‍💼
                    </div>

                    <div>

                        <h1>Добро пожаловать, Админ Системы!</h1>

                        <p>admin@example.com</p>

                    </div>

                </div>

                <button className="logout">

                    <span className="material-icons-outlined">
                        logout
                    </span>

                    Выйти

                </button>

            </header>


            <div className="card">

                <div className="cardTop">

                    <span className="material-icons-outlined icon">
                        account_circle
                    </span>

                    <div>

                        <h3>Профиль</h3>

                        <h2>ID: 1</h2>

                    </div>

                </div>

                <div className="cardBottom">
                    Личные данные пользователя
                </div>

            </div>


            <div className="card">

                <div className="cardTop">

                    <div className="emoji">
                        📊
                    </div>

                    <div>

                        <h3>Статистика</h3>

                        <h2>Активен</h2>

                    </div>

                </div>

                <div className="cardBottom">
                    Последний вход: сейчас
                </div>

            </div>


            <div className="card">

                <div className="cardTop">

                    <div className="emoji">
                        ⚙️
                    </div>

                    <div>

                        <h3>Настройки</h3>

                        <h2>Доступно</h2>

                    </div>

                </div>

                <div className="cardBottom">
                    Управление аккаунтом
                </div>

            </div>

        </div>

    );

}