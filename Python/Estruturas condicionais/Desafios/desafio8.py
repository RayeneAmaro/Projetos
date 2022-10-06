#Analisando Triângulo v1.0
#Desenvolva um programa que leia o comprimento de 3 retas
# e diga ao usuário se elas podem ou não formar um triângulo

a = (int(input('Digite o primeiro comprimento: ')))
b = (int(input('Digite o segundo comprimento: ')))
c = (int(input('Digite o terceiro comprimento: ')))

if (a + b < c) or ( a + c < b) or (b + c < a):
    print('Não pode formar um triângulo')
else:
    print('Pode formar um triângulo')