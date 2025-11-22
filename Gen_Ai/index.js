 import "dotenv/config";

// const testOpenAi = async () => {
//   try {
//     const response = await fetch("https://openrouter.ai/api/v1/responses", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         "HTTP-Referer": "http://localhost:3000", // required
//         "X-Title": "My AI App",                  // required
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "gpt-5",
//         input: "Write a one-sentence bedtime story about a unicorn."
//       }),
//     });

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("OpenRouter Error", error);
//   }
// };

// testOpenAi();


// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//     apiKey:process.env.GEMENI_API_KEY
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash-lite",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();
// import OpenAI from 'openai';
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//   },
// });
// async function main() {
//   const completion = await openai.chat.completions.create({
//     model: "openai/gpt-5",
//     messages: [
//       {
//         "role": "user",
//         "content": [
//             {
//                 "type":"text",
//                 "text":"what is ai"
//             }
//         //   {
//         //     "type": "text",
//         //     "text": "What is in this image?"
//         //   },
//         //   {
//         //     "type": "image_url",
//         //     "image_url": {
//         //       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
//         //     }
//          // }
//         ]
//       }
//     ],
    
//   });

//   console.log(completion.choices[0].message);
// }

// main();

// console.log(process.env.OPENAI_API_KEY?"ok":"!ok");


// import OpenAI from 'openai';


// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//   },
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     model: "openai/gpt-oss-20b:free",
//     messages: [
//       {
//         "role": "user",
//         "content": "What is the meaning of life?"
//       }
//     ],
    
//   });

//   console.log(completion.choices[0].message);
// }

// main();





// import { GoogleGenAI, Modality } from "@google/genai";
// import * as fs from "node:fs";

// async function main() {

//   const ai = new GoogleGenAI({
//     apiKey:process.env.GEMENI_API_KEY
//   });

//   const prompt =
//     "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme";

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash-image-preview",
//     contents: prompt,
//   });


//   for (const part of response.candidates[0].content.parts) {
//     if (part.text) {
//       console.log(part.text);
//     } else if (part.inlineData) {
//       const imageData = part.inlineData.data;
//       const buffer = Buffer.from(imageData, "base64");
//       fs.writeFileSync("gemini-native-image.png", buffer);
//       console.log("Image saved as gemini-native-image.png");
//     }
//   }
// }

// main();

// import OpenAI from "openai";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
//     "X-Title": "<YOUR_SITE_NAME>", // Optional
//   },
// });

// async function main() {
//   const result = await openai.images.generate({
//     model: "openai/gpt-image-1", // you can swap with other image models listed on OpenRouter
//     prompt: "A wooden boardwalk going through a lush green forest with sunlight streaming through the trees.",
//     size: "1024x1024", // optional: 256x256, 512x512, 1024x1024
//     n: 1, // number of images to generate
//   });

//   console.log(result.data[0].url); // get image URL
// }

// main();

// import OpenAI from 'openai';
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//   },
// });


// async function main() {
//   const completion = await openai.chat.completions.create({
//     model: "google/gemini-2.5-flash-image-preview:free",
//     messages: [
//       {
//         "role": "user",
//         "content": [
//           {
//             "type":"text",
//             "text":"what is inside image."
//           },
//           {
//             "type": "image_url",
//             "image_url": {
//               "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
//             }}
//         ]
//       }
//     ],
    
//   });

//   console.log(completion.choices[0].message);
// }

// main();
// import OpenAI from "openai";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
//     "X-Title": "<YOUR_SITE_NAME>",     // Optional
//   },
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     model: "google/gemini-2.5-flash-image-preview:free",
//     messages: [
//       {
//         role: "user",
//         content: [
//           { type: "text", text: "What is in this image?" },
//           { 
//             type: "image_url", 
//             image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg" 
//           }
//         ]
//       }
//     ],
//   });

//   console.log(completion.choices[0].message);
// }

// main();


import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:free",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What is the meaning of life."},
        ],
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main().catch(console.error);
