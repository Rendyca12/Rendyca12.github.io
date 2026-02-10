<?php
header("Content-Type: application/json; charset=UTF-8");

// 1. Ambil input dari AutoResponder (Body POST)
$jsonInput = file_get_contents("php://input");
$data = json_decode($jsonInput, true);
$userMessage = $data['query']['message'] ?? '';

// 2. Ambil Custom Instruction (%header%) dari URL
$customInstruction = $_GET['instruction'] ?? '';

if (!empty($userMessage)) {
    $apiKey = "sk_prod_d2e7fbc9745b85241714420c72292cce";
    
    // Gabungin instruksi + pesan user biar AI tau perannya
    $fullPrompt = $customInstruction 
        ? "Instruction: $customInstruction\n\nUser: $userMessage" 
        : $userMessage;

    $apiUrl = "https://api.alyachan.dev/api/ai/gemini?prompt=" . urlencode($fullPrompt);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer $apiKey"]);
    
    $response = curl_exec($ch);
    $result = json_decode($response, true);
    curl_close($ch);

    $replyText = $result['data']['content'] ?? "Waduh Bos, Alyachan lagi pusing nih.";
} else {
    $replyText = "Kirim pesan dulu dong, Bos Rendy!";
}

// 3. Balikin format JSON ke AutoResponder
echo json_encode([
    "replies" => [
        ["message" => $replyText]
    ]
]);
?>
