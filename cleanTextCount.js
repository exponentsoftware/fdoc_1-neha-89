function cleanTextCount(sentence){
    return sentence.trim().split(/\s+/).length;
    }
    let sentence = "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?"
    
    console.log(cleanTextCount(sentence));


    