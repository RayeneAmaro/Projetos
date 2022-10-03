#Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último
# nome separadamente
# Ex: Ana Maria de Souza
#primeiro: Ana
#último: Souza

nome = str(input('Digite seu nome completo: ')).strip()

n = nome.split()

print(f'Seu primeiro nome é: {n[0].title()}')

print(f'Seu último nome(sobrenome) é: {n[-1].title()}')
#ou
print(f'Seu último nome/sobrenome é: {n[len(n)-1].title()}')