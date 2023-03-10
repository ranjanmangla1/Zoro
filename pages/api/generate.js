import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY_TWO,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.userInput,
        temperature: 0.97,
        max_tokens: 2500,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
};

export default generateAction;