#Crie um programa que leia o nome completo de uma pessoa e mostre:
nome = input('Qual seu nome completo?').strip()
print(f' ' * 20)

#O nome com todas as letras maiusculas
print('Nome completo em maiusculo: ')
print(nome.upper())
print(f'=' * 20)

#O nome com todas as letras minusculas
print('Nome completo em minusculo: ')
print(nome.lower())
print(f'=' * 20)

#Quantas letras ao todo, sem considerar os espaços
print('Quantas letras tem o nome completo: ')
print(len(nome)-nome.count(' '))
print(f'=' * 20)

#Quantas letras tem o primeiro nome
primeiro = nome.split()
print('Quantas letras tem o primeiro nome (de 2 formas): ')
print(len(primeiro[0]))
#ou
print(nome.find(' '))