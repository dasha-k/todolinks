const fetchLinks = async (request) => {
  // const [results, setResults] = useState(null);
  // const [error, setError] = useState(null);

  // console.log('before request', request);
  // useEffect(() => {
    //console.log('inside useeffect');
    console.log('before fetch', request);
    const [results, error ] = await fetch(...request)
      .then(async (res) => {
        console.log('inside fetch');
        if(res.ok) {
          const results = await res.json();
          console.log('inside fetch, results', results);
      
          return [results, null];
          // setResults(results);
          // setError(null);
        } else {
          console.log('response is', res.status);
          //setError(await res.text());
          return [null, await res.text()];
        }
      })
      .catch((err) => {
        console.log('we got error');
        return [null, err.message];
      });
        
  //}, [request]);
  console.log('after fetch', results, error);
  // console.log('results', results, 'error', error);

  return [results, error];
}

export default fetchLinks;