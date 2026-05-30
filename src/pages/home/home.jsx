import React, { useState } from "react";
import "./home.css";
import { users } from "../../data/users";

export default function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {

        const user = users.find(

            u =>
                u.email === email &&
                u.password === password

        );

        if (user) {

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            window.location = "/life";

        }
        else {

            alert("Неверный email или пароль");

        }

    }

    return (

        <div className="home">

            <div className="card">

                <div className="topIcon">

                    <span className="material-icons-outlined">
                        lock
                    </span>

                </div>

                <h1>Авторизация</h1>

                <p className="subtitle">
                    Войдите в свой аккаунт
                </p>

                <div className="inputGroup">

                    <span className="material-icons-outlined inputIcon">
                        person_outline
                    </span>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="inputGroup">

                    <span className="material-icons-outlined inputIcon">
                        lock_outline
                    </span>

                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button onClick={login}>
                    Войти
                </button>

            </div>

        </div>

    );

}