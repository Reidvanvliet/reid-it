exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    // Get the Reddit endpoint from query parameters
    const redditEndpoint = event.queryStringParameters?.endpoint || 'best.json';
    
    // Build the Reddit URL
    const redditUrl = `https://www.reddit.com/${redditEndpoint}`;
    
    // Add raw_json=1 if not already present
    const url = new URL(redditUrl);
    if (!url.searchParams.has('raw_json')) {
      url.searchParams.set('raw_json', '1');
    }
    
    console.log('Fetching from Reddit URL:', url.toString());
    
    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Reid-It/1.0)'
      }
    });
    
    if (!response.ok) {
      console.error('Reddit API error:', response.status, response.statusText);
      return {
        statusCode: response.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: `Reddit API returned ${response.status}: ${response.statusText}` 
        })
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
    console.error('Function error:', error);
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