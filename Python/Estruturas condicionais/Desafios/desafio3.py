#Par ou ímpar
#Crie um programa que leia um número inteiro e mostre na tela se ele é Par ou Ímpar

numero = int(input('Digite um número inteiro: '))
divisao = numero % 2

if divisao == 0:
    print(f'{numero} é par')
else:
    print(f'{numero} é ímpar')