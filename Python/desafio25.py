#Crie um programa que leia o nome de uma pessoa e diga se ela tem "SILVA" no nome

nome = input('Digite seu nome completo: ').upper()

print(nome)

print(f'Tem Silva? ', 'SILVA' in nome)