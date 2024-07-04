import dotenv from 'dotenv'
dotenv.config()
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessagePromptTemplate, ChatPromptTemplate } from "@langchain/core/prompts";
const chat = new ChatOpenAI({})
import { DatetimeOutputParser, CommaSeparatedListOutputParser, StructuredOutputParser } from "langchain/output_parsers";

// Example 1
// const date_time_parser = new DatetimeOutputParser()
// console.log(date_time_parser.getFormatInstructions());

// const comma_sep_parser = new CommaSeparatedListOutputParser()
// console.log(comma_sep_parser.getFormatInstructions());

// Example 2

// const date_time_parser = new DatetimeOutputParser()
// const human_template = "{request} {format_instruction}"
// const human_message_prompt = HumanMessagePromptTemplate.fromTemplate(human_template)
// const chat_prompt = ChatPromptTemplate.fromMessages([
//   human_message_prompt
// ])

// // console.log("Chat Prompt: ", chat_prompt);
// const formatted_chat_prompt = await chat_prompt.formatMessages({
//   request: "What date was when world war 2 declared",
//   format_instruction: date_time_parser.getFormatInstructions()
// })

// console.log("Formatted Chat Prompt: ", formatted_chat_prompt);
// // const response = await chat.invoke(formatted_chat_prompt)
// // console.log("Response Content: ", response.content);
// // console.log("Response Content Parse: ", date_time_parser.parse(response.content));

// Example 3
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
  source: "source used to answer the user's question, should be a website.",
})
const human_template = "{request} {format_instruction}"
const human_message_prompt = HumanMessagePromptTemplate.fromTemplate(human_template)
const chat_prompt = ChatPromptTemplate.fromMessages([
  human_message_prompt
])

const formatted_chat_prompt = await chat_prompt.formatMessages({
  request: "What date was when world war 2 declared",
  format_instruction: parser.getFormatInstructions()
})

// console.log("Formatted Chat Prompt: ", formatted_chat_prompt);
// const response = await chat.invoke(formatted_chat_prompt)
// console.log("Response Content: ", response.content);
// console.log("Response Content Parse: ", await parser.parse(response.content));