<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Simple validation
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        
        // Sanitize inputs
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

        // Email recipient (Replace with your email)
        $to = "ntopioncorp@gmail.com"; 
        
        // Subject
        $email_subject = "New Contact Form Submission: $subject";

        // Email headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "MIME-Version: 1.0\r\n";  // Ensure correct MIME version
        
        // Email body content
        $body = "Dear [Your Name],\n\n";
        $body .= "You have received a new message from your website contact form:\n\n";
        $body .= "Full Name: $name\n";
        $body .= "Email Address: $email\n";
        $body .= "Subject: $subject\n\n";
        $body .= "Message:\n$message\n\n";
        $body .= "Best regards,\n";
        $body .= "The NTOPION Team";
        
        // Send the email
        if (mail($to, $email_subject, $body, $headers)) {
            echo "Thank you for reaching out to us. We will respond to your inquiry as soon as possible.";
        } else {
            echo "There was an issue sending your message. Please try again later.";
        }
    } else {
        echo "Please ensure all fields are filled out before submitting your inquiry.";
    }
} else {
    // Error handling if the form isn't submitted via POST
    echo "Invalid request method.";
}
?>
