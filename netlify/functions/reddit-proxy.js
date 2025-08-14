exports.handler = async (event, context) => {
  const { path, queryStringParameters } = event;
  
  // Extract the Reddit path from the function path
  const redditPath = path.replace('/.netlify/functions/reddit-proxy/', '');
  
  // Build the Reddit URL
  let redditUrl = `https://www.reddit.com/${redditPath}`;
  
  // Add query parameters if they exist
  if (queryStringParameters) {
    const params = new URLSearchParams(queryStringParameters);
    redditUrl += `?${params.toString()}`;
  }
  
  try {
    const response = await fetch(redditUrl);
    
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch from Reddit' })
      };
    }
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};