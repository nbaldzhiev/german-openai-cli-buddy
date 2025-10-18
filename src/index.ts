import * as OpenAI from 'openai';

const model = 'gpt-4o-mini';
const client = new OpenAI.OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
});

const prompt: string | undefined = process.argv[2]
if (!prompt) {
  throw new Error('Please provide a prompt as a command line argument.');
}

const response = await client.responses.create({
  model,
  instructions: 'You are a German tutor. Answer in English.',
  input: prompt,
});

console.log(response.output_text);
