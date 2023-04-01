<?php
    if(isset($_POST['first_name']) && isset($_POST['phone'])){
        $first_name = $_POST['first_name'];
        $phone = $_POST['phone'];
        $token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        $chat_id = "XXXXXXXXXXXXXXX";
        $arr = array(
        "Нове замовлення на дзвінок:" => "",
        "Ім'я: " => $first_name,
        "Телефон: " => $phone
        );
        foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    }
    else{
        header("Location: index.html");
    }
?>