import dotenv from 'dotenv'
dotenv.config()
// LLMs - Prompt Template
import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
const llm = new OpenAI({});

// Example 1 - Prompt having No Input Variable
const noInputPrompt = new PromptTemplate({
  inputVariables: [],
  template: "Tell me a trick of Javascript"
})
const formattedNoInputPrompt = await noInputPrompt.format();
console.log("No Input Prompt: ", formattedNoInputPrompt);
// const response = await llm.invoke(formattedNoInputPrompt)
// console.log("Response: ", response);

// Example 2 - Prompt having One Input Variable
// const oneInputPrompt = new PromptTemplate({
//   inputVariables: ["language"],
//   template: "Tell me a trick of {language}"
// })
// const formattedOneInputPrompt = await oneInputPrompt.format({
//   language: "c programming"
// });
// // console.log("One Input Prompt: ", formattedOneInputPrompt);
// const response = await llm.invoke(formattedOneInputPrompt)
// console.log("Response: ", response);

// Example 3 - Prompt having Multiple Input Variable
// const multipleInputPrompt = new PromptTemplate({
//   inputVariables: ["language", "topic"],
//   template: "Tell me a trick of {language} from {topic}"
// })
// const formattedMultipleInputPrompt = await multipleInputPrompt.format({
//   language: "python",
//   topic: "function"
// });
// // console.log("Multiple Input Prompt: ", formattedMultipleInputPrompt);
// const response = await llm.invoke(formattedMultipleInputPrompt)
// console.log("Response: ", response);

// Example 4 - PromptTempalte - No input variable manually
// const template = "Tell me a trick of {language} from {topic}"
// const promptTemplate = PromptTemplate.fromTemplate(template)
// console.log("Prompt Template: ", promptTemplate);
// console.log("Prompt Template Input Variables: ", promptTemplate.inputVariables);
// const formattedPromptTemplate = await promptTemplate.format({
//   language: "python",
//   topic: "array"
// });
// console.log("Formatted Prompt Template: ", formattedPromptTemplate);
// const response = await llm.invoke(formattedPromptTemplate)
// console.log("Response: ", response);
