
    // Seleciona o botão pelo ID
    const whatsappButton = document.getElementById('whatsappBtn');

    // Número do WhatsApp do montador
    const whatsappNumber = "5511987654321"; // Altere para o número real no formato internacional

    // Evento de clique no botão
    whatsappButton.addEventListener('click', () => {
        // Solicita o nome do usuário
        const userName = prompt("Olá! Qual é o seu nome?");

        // Solicita o serviço desejado
        const userService = prompt("Qual serviço você deseja? Ex: Montagem de Guarda-Roupas");

        // Mensagem personalizada para o WhatsApp
        const message = `Olá, meu nome é ${userName}. Gostaria de solicitar o serviço de ${userService}.`;

        // Codifica a mensagem para o formato de URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Confirmação antes de abrir o WhatsApp
        const userConfirm = confirm("Deseja abrir o WhatsApp e enviar sua mensagem?");

        if (userConfirm) {
            // Redireciona para o WhatsApp com a mensagem personalizada
            window.open(whatsappURL, "_blank");
        } else {
            alert("Tudo bem, estamos à disposição quando precisar!");
        }
    });


