<?php

// Funcion para mostrar mensaje SWEET ALERT
function mostrarSweetAlert($icon, $title, $footer,$timer){
    echo"
    <script>
        Swal.fire({
        position:'center',
        icon: '$icon',
        title: '$title',
        showConfirmButton: false,
        footer:'$footer',
        timer: $timer
        });
    </script>";
}

