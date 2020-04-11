export default function formatNumber(value) {
    return Intl.NumberFormat('pt-BR').format(value);
}