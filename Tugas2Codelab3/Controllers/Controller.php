<?php

namespace Controller;

class Controller
{
    var $contollerName;
    var $controllerMethod;

    public function getContollerAttribute()
    {
        return[
            "ControllerName" => $this->contollerName,
            "Methode" => $this->contollerName,
        ];
    }
}
?>