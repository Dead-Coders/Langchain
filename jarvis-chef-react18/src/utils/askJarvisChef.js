import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
export const askJarvisChef = async (recipeMessage) => {
  // console.log(recipeMessage);
  const SECRET_KEY = import.meta.env.VITE_OPENAI_API_KEY
  const chat = new ChatOpenAI({ openAIApiKey: SECRET_KEY })
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate("Your name is Jarvis. You are a master chef so First Introduce yourself as Jarivs The Master Chef. You can write any type of food recipe which can be cooked in 5 minutes. You are only allowed to answer food related queries. If You don't know the answer then tell I don't know the answer.")
  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{asked_recipe}")

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt, humanMessagePrompt
  ])
  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_recipe: recipeMessage
  })
  // console.log("Formatted Chat Prompt: ", formattedChatPrompt);
  const response = await chat.invoke(formattedChatPrompt)
  return response.content

}