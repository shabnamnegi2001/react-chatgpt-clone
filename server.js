
const PORT  = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


app.post('/completions', async(req, res) => {

    // const options = {
    //     method: "POST",
    //     Headers: {
    //         "Authorization": `Bearer ${API_KEY}`,
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         model:"gpt-4-turbo",
    //         messages:[{role:"user", content:"how are you?"}],
    //         max_tokens:100
    //     })
    // }

try{
//    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
//    const data = await response.json()
    const data = {
        "id": "chatcmpl-abc123",
        "object": "chat.completion",
        "created": 1677858242,
        "model": "gpt-4o-mini",
        "usage": {
            "prompt_tokens": 13,
            "completion_tokens": 7,
            "total_tokens": 20
        },
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": [
                        "Hello, i am chattergpt ", 
                        "I am here to assist you", 
                        "How can I assist you today?", 
                        "AI language model created by OpenAI.",
                        "I generate responses in real-time based on your input",
                        "I may occasionally misinterpret complex or ambiguous queries",
                        "I am designed to understand and generate human-like text",
                        "If you have any more questions or just want to chat, feel free to reach out",
                        "Have a great day!",
                        "It’s nice talking to you too! "
                    ][Math.floor(Math.random()*10)]
                },
                "logprobs": null,
                "finish_reason": "stop",
                "index": 0
            }
        ]
    }
   res.send(data)

} catch (error) {
    console.error(error)
}
})

app.listen(PORT, () => console.log('your server is running on PORT ' + PORT) )

