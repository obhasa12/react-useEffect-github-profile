import { useEffect, useState } from "react";

const RANDOM_QOUTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

const QuoteFetcher = () => {
    const [quote, setQuotes] = useState({text: "", author: ""});

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QOUTE_URL);
    //         const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse.quote;
    //         setQuotes(randomQuote)
    //     };
    //     getInitialQuote();
    // }, [])

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const response = await fetch(RANDOM_QOUTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuotes(randomQuote);
    };

    return (  
        <div className="quite-fetcher">
            <button onClick={fetchQuote} >Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
 
export default QuoteFetcher;