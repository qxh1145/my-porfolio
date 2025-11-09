
import React, { useState, useEffect } from 'react';



const ToggleDarkmode = () => {

    // Đặt theme mặc định là 'light' hoặc lấy từ localStorage nếu có

    const [isDarkMode, setIsDarkMode] = useState(() => {

        const savedTheme = localStorage.getItem('theme');

        return savedTheme === 'dark';

    });



    // Áp dụng theme cho body và lưu vào localStorage

    useEffect(() => {

        if (isDarkMode) {

            document.body.classList.add('dark-theme');

            document.body.classList.remove('light-theme');

            localStorage.setItem('theme', 'dark');

        } else {

            document.body.classList.add('light-theme');

            document.body.classList.remove('dark-theme');

            localStorage.setItem('theme', 'light');

        }

    }, [isDarkMode]);



    // Đặt theme ban đầu khi component được mount mà không có hiệu ứng chuyển tiếp

    useEffect(() => {

        document.body.classList.add('no-transition');

        if (isDarkMode) {

            document.body.classList.add('dark-theme');

        } else {

            document.body.classList.add('light-theme');

        }

        

        const timer = setTimeout(() => {

          document.body.classList.remove('no-transition');

        }, 100);



        return () => clearTimeout(timer);

    }, []);





    const handleToggle = () => {

        setIsDarkMode(prevMode => !prevMode);

    };



    return (

        <label>

            <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />

            Dark Mode

        </label>

    );

};



export default ToggleDarkmode;
