<?php
// response_user.php
// Helper functions për Users CRUD

/**
 * Kthen përgjigje suksesi në JSON
 *
 * @param array $data - të dhënat që do të dërgohen
 */
function json_ok_user(array $data = []) {
    echo json_encode([
        "success" => true,
        "data" => $data
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Kthen përgjigje gabimi në JSON
 *
 * @param string $message - mesazhi i gabimit
 * @param int $status - kodi HTTP (default 400)
 */
function json_error_user(string $message, int $status = 400) {
    http_response_code($status);
    echo json_encode([
        "success" => false,
        "message" => $message
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
