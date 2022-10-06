from random import randint;

#Jogo de adivinhação

# Escreva um programa que faça o computador 'pensar'
# em um número inteiro entre 0 e 5 e peça para o usuário
# tentar descobrir qual foi o número escolhido pelo computador
#O programa deverá escrevar na tela se o usuário venceu ou perdeu.

num = randint(0,5)
user = int(input('Qual número o programa escolheu? '))

if num == user:
    print('Você venceu')
else:
    print(f'Você perdeu. O número escolhido pelo computador foi: {num}')