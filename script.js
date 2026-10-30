// Dados extraídos da planilha do cronograma
const categorias = ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'];
const valores = [1300, 1000, 500, 150];

const ctx = document.getElementById('graficoViagem').getContext('2d');

const graficoViagem = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categorias,
        datasets: [{
            label: 'Valor Total (R$)',
            data: valores,
            backgroundColor: [
                '#3f51b5',
                '#00bcd4',
                '#4caf50',
                '#ff9800'
            ],
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return ' R$ ' + context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value;
                    }
                }
            }
        }
    }
});
