document.addEventListener('DOMContentLoaded', () => {
    // Simular detecção de cidade com base em localização (geolocalização básica)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Normalmente, você usaria uma API de geolocalização para obter a cidade.
                // Aqui vamos apenas simular com São Paulo.
                document.getElementById('city-detection').textContent = 'Cidade detectada: São Paulo';
            },
            (error) => {
                console.log(error);
            }
        );
    }

    // Evento de "Alterar localização"
    document.getElementById('change-location').addEventListener('click', () => {
        const newCity = prompt("Digite sua cidade:");
        if (newCity) {
            document.getElementById('city-detection').textContent = `Cidade: ${newCity}`;
        }
    });

    // Evento de "Buscar"
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const carModel = document.getElementById('car-model').value;
        const city = document.getElementById('city-detection').textContent.replace('Cidade: ', '');

        if (carModel) {
            alert(`Buscando ${carModel} na cidade ${city}`);
            // Aqui você faria uma requisição para o backend para buscar o carro mais barato.
        } else {
            alert("Por favor, insira o modelo do carro.");
        }
    });
});
