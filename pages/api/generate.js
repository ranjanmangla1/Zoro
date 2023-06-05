import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY_TWO,
});

const openai = new OpenAIApi(configuration);

const toRemove = `Write an email copy with an attention-grabbing subject that looks well-researched, and professional, and reflects that writer knows about the product and understands consumer psychology. The copy must have a good flow and should be able to convert. The email copy should have a clear call-to-action, and it should tempt the reader to read the whole copy.

Every paragraph and line of the copy should force the reader to read the next line of copy

The copy should not sound salesy like someone is forcing someone to buy and should be on par with the copies of Dan Lok, Ogilvy, Nike, & Apple. The copy should project an image that this is the best option available for the buyer.
 
The copy should handle objections well, should cater to the two primary emotions of humans that is Sex & Survival. The copy should keep in the mind the fact that people want to avoid pain.

The copy should also focus on the fact that for people, fear of loss is greater than desire of gain. Copy should cover that aspect as well because without fear user will never take action. The copy should instill a sense of fear in the reader to take action.

The offer should be limited(like only 10 seats or it is applicable to 24 hours only, so hurry up & take action. and the call-to-action must be short & sweet. Along with the CTA there should be a guarantee like 30 day money back guarantee or get full refund within 30 days if you don't like and we will never ask

The copy should be informal and friendly. The copy should be written in a way it feels like the reader is talking to an actual trustworthy human.

Use emojis to create friendliness with the reader

Situation:
`;

const finalPromptPrefix = `
Convert the copy in HTML and beautify it with CSS & JavaScript 
Create a beautiful web design for the Email as well.
There should be a header and footer section as well
The footer section should have all the icons & links of the brand's social media handles and should contain the contact info of brand too
Incorporate all modern UI principles and create a modern design-styled copy Use provided colors well.

Instead of HTML5, Use HTML 4.01 Transitional Doctype declarations:
DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/DTD/loose.dtd
Also add these two meta tags in email header:
meta name="format-detection" content="date=no"
meta name="format-detection" content="telephone=no"
meta content="width=device-width,initial-scale=1" name="viewport"

For CSS: Use Inline CSS. Use containers for styling of body. Don't use same color for background and font in a container. Hierarchy should be Clear. Maintain proper contrast with proper color combination. Gradients and box shadows can be used. Typography should stand out. Maintain Proper Whitespace.Text is readable and proper color matching should be used. The web design should look artistic, professional & detailed and should look like a great web designer created it. Two elements should not overlap with each other in the web page. Text in button should not be greater than 7 words. Design should look like it is made by an actual professional.Keep Proper margin and padding between elements. Text should not overlap. Design should be responsive and should look well in all kind of Devices. There should be sufficient color contrast at least the ratio of 4.5:1 of backgrounds to text. Text and Images should be properly aligned with each other except icons. Text on button should be responsive and text on button should be less than 100% of viewport. Text of button should not overlap.

code should use the best principles used for HTML based emails for gmail

Emphasis should be in the form of italics, bold, underline, CAPITAL  LETTERS or, Colored Letters wherever it is necessary. Only certain words should be emphasized

Use bold, italics, underline, CAPITAL LETTERS like a professional copywriter
Use Ellipsis ("...") to keep reader hooked
To look professional, use of these techniques is must in the copy

Maintain line space in such a way that readability of text is not compromised

For buttons: Use colors that get along well, do not use colors that will lack visibility as background for text

Use dark colors for light backgrounds and dark background for light colors

Icons for footer:
PNG for twitter Icon: https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Twitter.png?raw=true
PNG for instagram Icon: https://raw.githubusercontent.com/shahbajjamil/Social-Meadia-Icons/master/Icons-logos/instagram-circle.png
PNG for LinkedIn Icon: https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/LinkedIN.png?raw=true
The icons must be arranged in same line with proper white space 
Icon height and width should be equal and less than equal to 40px
all the icons should be in same row with proper space
Buttons should be centred and all the text & icons of footer should come in center

Images: Try to avoid writing text on Images. Don't use dark text on dark images. If writing text on image, first apply filter on the image and then write text in a light color if image is dark or write text in a dark color if image is light colored. If not given a link for an image & if not asked to generate, don't generate on your own and don't leave a blank space for it. Images should not overflow.

Based on guidelines above, write an email copy, in form of HTML and Generate inline css for it

Generate CSS for each Individual HTML element separately and Embed inline CSS in each HTML element separately
`;


const generateAction = async (req, res) => {

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.userInput,
        temperature: 0.97,
        max_tokens: 2500,
    });

    let userInput = req.body.userInput;
    userInput = userInput.replace(toRemove, '');

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });

    const secondPrompt = ` Copy : ${basePromptOutput.text}\n\n${userInput}\n\n${finalPromptPrefix}`

    console.log('secondPrompt: ' + secondPrompt)

    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${secondPrompt}`,
        // I set a higher temperature for this one. Up to you!
        temperature: 0.85,
            // I also increase max_tokens.
        max_tokens: 1250,
    });
    
    const secondPromptOutput = secondPromptCompletion.data.choices.pop();

      // Send over the Prompt #2's output to our UI instead of Prompt #1's.
    res.status(200).json({ output: secondPromptOutput });
};




export default generateAction;
