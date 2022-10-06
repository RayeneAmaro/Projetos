#Aumentos múltiplos
#Escreva um programa que pergunte o salário de um funcionário
# e calcule o valor do seu aumento.
#Para salários superiores a R$1250 calcule um aumento de 10%
#Para os inferiores ou iguais o aumento é de 15%

salario = float(input('Digite seu salário: R$ '))

if salario > 1250.00:
    aumento = float(salario * 0.1)
    total = float(salario + aumento)
    print(f'Seu salário atual é R${salario:.2f}, você recebeu um aumento de R${aumento:.2f}, seu novo salário sera de R${total:.2f}')
else:
    aumento = float(salario * 0.15)
    total = float(salario + aumento)
    print(f'Seu salário atual é R${salario:.2f}, você recebeu um aumento de R${aumento:.2f}, seu novo salário sera de R${total:.2f}')