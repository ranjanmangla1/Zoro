import Head from 'next/head';
import Image from 'next/image';
import Twitter from '../assets/Twitter_white.png';
import { CopyBlock, dracula } from "react-code-blocks";

import { useState } from 'react';


const Home = () => {
  
//   Final Prompt for gpt-3...this will generate us our HTML
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

  Images: Try to avoid writing text on Images. Don't use dark text on dark images. If writing text on image, first apply filter on the image and then write text in a light color if image is dark or write text in a dark color if image is light colored. If not given a link for an image; if not asked to generate, don't generate on your own and don't leave a blank space for it

  Based on guidelines above, write an email copy, in form of HTML and Generate inline css for it

  Generate CSS for each Individual HTML element separately and Embed inline CSS in each HTML element separately
  `;

  //   Final Prompt for gpt-3...this will generate us our Copy
  const basePromptPrefix =
    `Write an email copy with an attention-grabbing subject that looks well-researched, and professional, and reflects that writer knows about the product and understands consumer psychology. The copy must have a good flow and should be able to convert. The email copy should have a clear call-to-action, and it should tempt the reader to read the whole copy.

    Every paragraph and line of the copy should force the reader to read the next line of copy
    
    The copy should not sound salesy like someone is forcing someone to buy and should be on par with the copies of Dan Lok, Ogilvy, Nike, & Apple. The copy should project an image that this is the best option available for the buyer.
     
    The copy should handle objections well, should cater to the two primary emotions of humans that is Sex & Survival. The copy should keep in the mind the fact that people want to avoid pain.
    
    The copy should also focus on the fact that for people, fear of loss is greater than desire of gain. Copy should cover that aspect as well because without fear user will never take action. The copy should instill a sense of fear in the reader to take action.
    
    The offer should be limited(like only 10 seats or it is applicable to 24 hours only, so hurry up & take action. and the call-to-action must be short & sweet. Along with the CTA there should be a guarantee like 30 day money back guarantee or get full refund within 30 days if you don't like and we will never ask
    
    The copy should be informal and friendly. The copy should be written in a way it feels like the reader is talking to an actual trustworthy human.

    Use emojis to create friendliness with the reader

    Situation:
`;
    
//   for taking user Input
    const [userInput1, setUserInput1] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [userInput3, setUserInput3] = useState('');
    const [userInput4, setUserInput4] = useState('');
    const [userInput5, setUserInput5] = useState('');
    const [userInput6, setUserInput6] = useState('');
    const [userInput7, setUserInput7] = useState('');
    const [userInput8, setUserInput8] = useState('');
    const [userInput9, setUserInput9] = useState('');
    const [userInput10,setUserInput10] = useState('');
    const [userInput11,setUserInput11] = useState('');
    const [userInput12,setUserInput12] = useState('');
  
//     for storing and outputing the output, we will get from gpt-3 api
    const [apiOutput,setApiOutput] = useState('')
    
//     to keep track of whether, we are requesting any data from gpt or not
    const [isGenerating,setIsGenerating] = useState(false)
    
    //  Base prefixes to combine multiple user inputs and to get better user output
    const basePrefix1 = `\nTarget Audience: `;
    const basePrefix2 = `\nBrand Colors: `;
    const basePrefix3 = '\n Brand Fonts: ';
    const basePrefix4 = `\nImages that can be used:`;
    const basePrefix5 = `\nImage Color :`;
    const basePrefix6 = `\nDesign Style:`;
    const basePrefix7 = `\nCTA Link: `;
    const basePrefix8 = `\n Twitter: `;
    const basePrefix9 = `\n Linkedin: `;
    const basePrefix10 = `\nInstagram: `;
    const basePrefix11= `\nContact: `;
    
//     chainining all user inputs and prefixes to get a final prompt
    const userInput = basePromptPrefix + userInput1 + basePrefix1+finalPromptPrefix+ userInput2+basePrefix2+userInput3+basePrefix3+userInput4+basePrefix4+userInput5+basePrefix5+userInput6+basePrefix6+userInput7+basePrefix7+userInput8 + basePrefix8+userInput9+basePrefix9+userInput10+basePrefix10+userInput11+basePrefix11+userInput12;
    
//   requesting response from api
  const callGenerateEndpoint = async () => {
        setIsGenerating(true);

        console.log("Calling OpenAI...", userInput)
        
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userInput}),
        })

          const data = await response.json();
          const {output} = data;
//           console.log("OpenAI replied...", output.text)

            setApiOutput(`${output.text}`);
            setIsGenerating(false);
}
     
// Setting userInput in our variable and also it is helpful when user makes any change in the text fields
  const onUserChangedText1 = (event) => {
    setUserInput1(event.target.value);
  };
  const onUserChangedText2 = (event) => {
    setUserInput2(event.target.value);
  }; 
  const onUserChangedText3 = (event) => {
    setUserInput3(event.target.value);
  }; 
  const onUserChangedText4 = (event) => {
    setUserInput4(event.target.value);
  }; 
  const onUserChangedText5 = (event) => {
    setUserInput5(event.target.value);
  }; 
  const onUserChangedText6 = (event) => {
    setUserInput6(event.target.value);
  }; 
  const onUserChangedText7 = (event) => {
    setUserInput7(event.target.value);
  };
  const onUserChangedText8 = (event) => {
    setUserInput8(event.target.value);
  }; 
  const onUserChangedText9 = (event) => {
    setUserInput9(event.target.value);
  };
  const onUserChangedText10 = (event) => {
    setUserInput10(event.target.value);
  };
  const onUserChangedText11 = (event) => {
    setUserInput11(event.target.value);
  };
  const onUserChangedText12 = (event) => {
    setUserInput12(event.target.value);
  };
  
  return (
    <div className="root">
      <Head>
      <link rel="shortcut icon" href="./Icon.ico" />
        <title>Email Generator & Scheduler</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Email Generator & Scheduler</h1>
          </div>
          <div className="header-subtitle">
            <h2>Copywriting for Email Campaigns with beautiful HTML templates</h2>
          </div>
        </div>

        {/* to take user inputs*/}
        <div className="prompt-container">
          <textarea placeholder="Tell About your Organization..." className="prompt-box"
            value={userInput1}
            onChange={onUserChangedText1} />

            <textarea placeholder="What is your target audience?" className="prompt-box"
            value={userInput2}
            onChange={onUserChangedText2} />

            <textarea placeholder="What are your Brand Colors?" className="prompt-box"
            value={userInput3}
            onChange={onUserChangedText3} />

            <textarea placeholder="What are your Brand Fonts?" className="prompt-box"
            value={userInput4}
            onChange={onUserChangedText4} />

            <textarea placeholder="Enter link to Images that can be used: (If Any) (Only add the link)" className="prompt-box"
            value={userInput5}
            onChange={onUserChangedText5} />

            <textarea placeholder="Image Colors: " className="prompt-box"
            value={userInput6}
            onChange={onUserChangedText6} />

            <textarea placeholder="Design Style: " className="prompt-box"
            value={userInput7}
            onChange={onUserChangedText7} />

            <textarea placeholder="CTA Link" className="prompt-box"
            value={userInput8}
            onChange={onUserChangedText8} />

            <textarea placeholder="Twitter handle of your Organization (complete link)" className="prompt-box"
            value={userInput9}
            onChange={onUserChangedText9} />

            <textarea placeholder="LinkedIn handle of your Organization (complete Link)" className="prompt-box"
            value={userInput10}
            onChange={onUserChangedText10} />

            <textarea placeholder="Instagram handle of your Organization (complete Link)" className="prompt-box"
            value={userInput11}
            onChange={onUserChangedText11} />

            <textarea placeholder="Contact: " className="prompt-box"
            value={userInput12}
            onChange={onUserChangedText12} />
          
              {/*Generate button to get output*/}
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}>
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className='Output-frames'>
              <div className="output-content">
            {/*iframe generates HTML output of the mal*/}
                      <iframe srcdoc = {apiOutput} width = '400' height = '800'></iframe>
                    </div>
                      <div className="output-code">
                        {/*Using react-code-blocks package to show Raw HTML output so that user can make amendments on the fly*/}
                      <CopyBlock
                          customStyle={{
                            height: '800px',
                            width: '400px',
                            overflow: 'scroll',
                          }}
                          className='code'
                          language={'html'}
                          text={apiOutput}
                          showLineNumbers={true}
                          theme={dracula}
                          wrapLines={true}
                          codeBlock
                      />
                    </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
{/*To show who created it*/}
      <div className="badge-container grow">
        <a
          href="https://twitter.com/ranjan_mangla"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={Twitter} alt="Twitter-logo" />
            <p>built by Ranjan</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
