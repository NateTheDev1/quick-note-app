const shortenText = text => {
    let ending = '...';
    if(text.length > 200) {
        return text.substring(0, 200 - ending.length) + ending
    } else {
        return text
    }
}

export default shortenText;