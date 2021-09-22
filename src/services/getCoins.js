export async function getCoins (url) {
    const response = await fetch(url);
    const coins = await response.json();
    return coins;
}