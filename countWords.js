function countWords(paragraph, love, you)
	{
		
	let a = paragraph.split(" ");

	let count = 0;
    let count1 = 0;
	for (let i = 0; i < a.length; i++)
	{
	
	if (a[i].includes(love))
		count++;

    if (a[i].includes(you))
        count1++;
	}

    if(count < count1)
	return count1;

    return count;
	}
	
	let paragraph = " I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love. ";
    word = 'love';
    word1 = 'you';
	const res = countWords(paragraph, word, word1);
    console.log(res)