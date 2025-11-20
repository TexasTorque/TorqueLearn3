const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);

  // Check if this is a signup event
  if (body.type === 'signup') {
    const user = body.data;
    
    const NETLIFY_IDENTITY_URL = `https://${process.env.SITE_URL}/.netlify/identity/admin/users/${user.id}`;
    const token = process.env.NETLIFY_ADMIN_TOKEN; // Create a personal access token in Netlify
    
    // Update user role to editor
    await fetch(NETLIFY_IDENTITY_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roles: ['editor'] })
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User role updated to editor' })
    };
  }

  return { statusCode: 200, body: 'No action taken' };
};