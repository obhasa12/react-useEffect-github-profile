import { useEffect, useState } from "react";

const RANDOM_QOUTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

const QuoteFetcherLoader = () => {
    const [quote, setQuotes] = useState({text: "", author: ""});
    const [isLoading, setIsLoading] = useState(true)

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
        const fetchQuote = async () => {
            const response = await fetch(RANDOM_QOUTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuotes(randomQuote);
            setIsLoading(false);
        }
        fetchQuote();
    }, []);

    return (  
        <div className="quite-fetcher-loader">
            <p className="loader" style={{opacity: isLoading ? 1: 0}}>Loading...</p>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
 
export default QuoteFetcherLoader;