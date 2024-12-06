export async function sendWebhook(data: any) {
  try {
    const response = await fetch('https://hook.eu2.make.com/4qurd2lbjd59jqabaekvm0yaiciq0gbn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to send webhook:', error);
  }
}