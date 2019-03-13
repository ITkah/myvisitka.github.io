<?php
        $to = 'ilatkacenko132@gmail.com';
        $subject = 'Отзыв на вакансию';
        $name = trim(urldecode(htmlspecialchars($_POST['name'])));
        $email = trim(urldecode(htmlspecialchars($_POST['email'])));
        $section = trim(urldecode(htmlspecialchars($_POST['usermes'])));

        $message='
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$name.'</p>
                    <p>email: '.$email.'</p>
                    <p>Телефон: '.$phone.'</p>
                    <p>Вакансия: '.$section.'</p>
                </body>
            </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: itkah@bk.ru\r\n";

        if (mail($to, $subject, $message, $headers)){ 
            return true;
        } else { 
            return $message  ;
        }
?>