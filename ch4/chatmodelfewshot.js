import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, FewShotChatMessagePromptTemplate } from "@langchain/core/prompts";
import dotenv from 'dotenv'
dotenv.config()
const chat = new ChatOpenAI({})

// Few Shot Examples
const examples = [
  { "input": "2+2", "output": "4" },
  { "input": "2+3", "output": "5" },
]

const examplePrompt = ChatPromptTemplate.fromMessages([
  ["human", "{input}"],
  ["ai", "{output}"],
])
const fewShotPrompt = new FewShotChatMessagePromptTemplate({
  examplePrompt,
  examples,
  inputVariables: ["input"],
});

const finalPrompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful math problem solver."],
  fewShotPrompt,
  ["human", "{input}"]
])

const formattedChatPrompt = await finalPrompt.format({
  input: "What's the square of a triangle?"
})
console.log("Formatted Chat Prompt: ", formattedChatPrompt);
// const response = await chat.invoke(formattedChatPrompt)
// console.log("Response Content: ", response.content);
