import { OpenAI } from "@langchain/openai";
import { PromptTemplate, FewShotPromptTemplate } from "@langchain/core/prompts";
import dotenv from 'dotenv'
dotenv.config()
const llm = new OpenAI({});

// LLMs
// Few Shot Examples
const examples = [
  {
    "input": "The patient presented with acute exacerbation of chronic obstructive pulmonary disease, manifesting symptoms such as dyspnea, increased respiratory rate, and use of accessory muscles for breathing.",
    "output": "The patient is having a sudden worsening of chronic lung disease. This shows with difficulty breathing, faster breathing, and using extra muscles to breathe."
  },
  {
    "input": "The patient is experiencing hyperlipidemia, characterized by elevated levels of low-density lipoprotein cholesterol and triglycerides, along with reduced high-density lipoprotein cholesterol, putting them at increased risk for cardiovascular disease",
    "output": "The patient has high cholesterol, with too much of the 'bad' kind and triglycerides, and not enough of the 'good' kind. This increases the risk of heart problems."
  },
]

const examplePrompt = new PromptTemplate({
  inputVariables: ["input", "output"],
  template: "{input} {output}"
})

const prompt = new FewShotPromptTemplate({
  examples,
  examplePrompt,
  suffix: "{myinput}",
  inputVariables: ["myinput"]
})

const myprompt = await prompt.format({
  myinput: "The patient has been diagnosed with hypertension, evidenced by consistently elevated blood pressure readings, indicating sustained systolic and diastolic pressures above the normal range."
})

// console.log("My Prompt: ", myprompt);
const response = await llm.invoke(myprompt)
console.log("Response: ", response);

