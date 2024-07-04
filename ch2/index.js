import dotenv from 'dotenv'
dotenv.config()
// console.log(process.env.OPENAI_API_KEY);

// // LLMs
// import { OpenAI } from "@langchain/openai";
// const llm = new OpenAI({});
// const response = await llm.invoke("Who is Prime Minister of India ?")
// console.log("Response: ", response);

// // Chat Model
// // Example 1
// // import { ChatOpenAI } from "@langchain/openai";
// // const chat = new ChatOpenAI({})
// // const response = await chat.invoke("Who is Prime Minister of India ?")
// // console.log("Response: ", response);

// Example 2
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages"
const chat = new ChatOpenAI({ openAIApiKey: process.env.OPENAI_API_KEY })

const messages = [
  new SystemMessage("You're a stand-up comedian"),
  new HumanMessage("Tell a joke about programmer")
]

const response = await chat.invoke(messages)
console.log(response);

