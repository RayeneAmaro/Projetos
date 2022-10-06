#Ano Bissexto
#Faça um programa que leia um ano qualquer e mostre se ele é Bissexto

ano = int(input('Digite um ano: '))
bissexto = ano % 4

if bissexto == 0:
    print(f'O ano de {ano} é bissexto')
else:
    print(f'O ano de {ano} não é bissexto')