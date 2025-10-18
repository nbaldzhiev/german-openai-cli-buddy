import * as OpenAI from 'openai';

const model = 'gpt-4o-mini';

const client = new OpenAI.OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
});

const response = await client.responses.create({
  model,
  instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Are semicolons optional in JavaScript?',
});

console.log(response.output_text);
