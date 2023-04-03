<?php
    if(isset($_POST['first_name']) && isset($_POST['phone']) && isset($_POST['modal__type']) && isset($_POST['modal__fuel']) && isset($_POST['modal__year']) && isset($_POST['modal__budget']) && isset($_POST['modal__gift'])){
        $first_name = $_POST['first_name'];
        $phone = $_POST['phone'];
        $modal__type = $_POST['modal__type'];
        $modal__fuel = $_POST['modal__fuel'];
        $modal__year = $_POST['modal__year'];
        $modal__budget = $_POST['modal__budget'];
        $modal__gift = $_POST['modal__gift'];
        $token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        $chat_id = "XXXXXXXXXXXXXXX";
        $arr = array(
        "Нова заявка:" => "",
        "Ім'я: " => $first_name,
        "Телефон: " => $phone,
        "Тип кузова: " => $modal__type,
        "Тип палива: " => $modal__fuel,
        "Вік авто: " => $modal__year,
        "Бюждет: " => $modal__budget,
        "Подарунок: " => $modal__gift
        );
        foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        $txt = str_replace(['[', ']', '"'], '', $txt);
        $txt = str_replace([','], ', ', $txt);
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    }
    else{
        header("Location: index.html");
    }
?>
