<?php
/**
 * Created by PhpStorm.
 * User: ducthang
 * Date: 4/13/17
 * Time: 4:54 PM
 */
function array_to_csv_download()
{
    $filename = "export.csv";
    header('Content-Type: application/csv');
    header('Content-Disposition: attachment; filename="' . $filename . '";');

    echo file_get_contents($filename);
    exit();
}


array_to_csv_download();