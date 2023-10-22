# importing chatterbot
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from listQueries import *

# Creating a new instance of the ChatBot class as FlaskyBot

Vchat = ChatBot(name='Vchat',
                logic_adapters=['chatterbot.logic.MathematicalEvaluation',
                                    'chatterbot.logic.BestMatch']
                )


#getting all the reply and answers and training it
training_list = ListTrainer(Vchat)
for item in (greet_data, fees, basic_qus, timings , signing_of_data):
    training_list.train(item)

default_response = "I'm sorry, but I don't understand that. Can you please rephrase your question?"

# Define a function to get a response from the chatbot with a default response
def chat_response(input_text):
    response = Vchat.get_response(input_text)
    return response if response.confidence > 0.5 else default_response
