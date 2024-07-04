import dotenv from 'dotenv'
dotenv.config()
// Chat Model - Prompt Template
import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const chat = new ChatOpenAI({})
// Example 1 - Message Prompt Template as Tuples
const sys_template = "You are a helpful assistant that translates {input_language} to {output_language}.";
const human_template = "{text}"

const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", sys_template],
  ["human", human_template],
])

const formattedChatPrompt = await chatPrompt.formatMessages({
  input_language: "English",
  output_language: "French",
  text: "I am learning LangChain JS from GeekyShows YT"
})

// console.log("Formatted Chat Prompt: ", formattedChatPrompt);
// const response = await chat.invoke(formattedChatPrompt)
// // console.log("Response: ", response);
// console.log("Response Content: ", response.content);

// // Example 2 - Using Message Classes
// const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate("You are a helpful assistant that translates {input_language} to {output_language}.")
// const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{text}")
// // console.log("System Message Input Variables:", systemMessagePrompt.inputVariables);
// // console.log("Human Message Input Variables:", humanMessagePrompt.inputVariables);

// const chatPrompt = ChatPromptTemplate.fromMessages([
//   systemMessagePrompt, humanMessagePrompt
// ])
// // console.log("Chat Prompt: ", chatPrompt);
// // console.log("Chat Prompt Input Variables: ", chatPrompt.inputVariables);

// const formattedChatPrompt = await chatPrompt.formatMessages({
//   input_language: "English",
//   output_language: "French",
//   text: "I love programming"
// })
// // console.log("Formatted Chat Prompt: ", formattedChatPrompt);

// const response = await chat.invoke(formattedChatPrompt)
// // console.log("Response: ", response);
// console.log("Response Content: ", response.content);

// // Example 3 - Using PromptTemplate
// const systemPrompt = new PromptTemplate({
//   template: "You are a helpful assistant that translates {input_language} to {output_language}.",
//   inputVariables: ["input_language", "output_language"]
// })
// const humanPrompt = new PromptTemplate({
//   template: "{text}",
//   inputVariables: ["text"]
// })

// const systemMessagePrompt = new SystemMessagePromptTemplate({ prompt: systemPrompt })
// const humanMessagePrompt = new HumanMessagePromptTemplate({ prompt: humanPrompt })

// const chatPrompt = ChatPromptTemplate.fromMessages([
//   systemMessagePrompt, humanMessagePrompt
// ])
// // console.log("Chat Prompt: ", chatPrompt);
// // console.log("Chat Prompt Input Variable : ", chatPrompt.inputVariables);

// const formattedChatPrompt = await chatPrompt.formatMessages({
//   input_language: "English",
//   output_language: "French",
//   text: "I love programming"
// })

// // console.log("Formatted Chat Prompt: ", formattedChatPrompt);

// const response = await chat.invoke(formattedChatPrompt)
// // // console.log("Response: ", response);
// console.log("Response Content: ", response.content);