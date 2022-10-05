#Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "SANTO"

cidade = input('Em que cidade você nasceu? ').strip()

print((cidade[0:5].title() == 'Santo'))