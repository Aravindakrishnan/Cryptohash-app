export async function getCoinOfTheDay(){
    const response = await fetch("https://api.lunarcrush.com/v2?data=coinoftheday&key=flxqm5gretso6re2ndvbr");
    const coin = await response.json();
    return coin;
}
