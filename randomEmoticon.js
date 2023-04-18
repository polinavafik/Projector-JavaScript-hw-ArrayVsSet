const input = document.querySelector('.emotikon-input');

export function randomEmoticon() {
    let emoticons = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    let random = Math.floor(Math.random() * emoticons.length);
    return emoticons[random]
}




