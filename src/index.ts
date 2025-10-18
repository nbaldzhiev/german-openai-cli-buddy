import * as OpenAI from 'openai';

const modes = ['random word', 'explain'];
const model = 'gpt-4o-mini';
const client = new OpenAI.OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
});

const mode: string | undefined = process.argv[2]
const prompt: string | undefined = process.argv[3]
if (!mode || !modes.includes(mode)) {
  throw new Error('Please provide a `mode` ("random word | explain") as a command line argument.');
} else if (mode === 'explain' && !prompt) {
  throw new Error('Please provide a `prompt` to explain as a second command line argument.');
}

const response = await client.responses.create({
  model,
  instructions: 'You are a German tutor. Explain or correct the prompt using English.',
  input: mode === 'explain' ? prompt! : 'Ask me to translate a random German word, but hide the answer in a dictionary link.',
});

console.log(response.output_text);
