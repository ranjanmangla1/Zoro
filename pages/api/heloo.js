import { Configuration, OpenAIApi } from 'openai';

console.log("ye dusre generate mein aa gya")



const generateActionSecond = async (req, res) => {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


  console.log("Calling open ai from Secondary ")
    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.userInputTwo,
        temperature: 0.97,
        max_tokens: 1200,
      }); 
      
      console.log("Dusara Output aa gya!")
      const secondPromptOutput = secondPromptCompletion.data.choices.pop();

      res.status(200).json({ output: secondPromptOutput });
};

export default generateActionSecond;