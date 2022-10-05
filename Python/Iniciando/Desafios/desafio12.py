salario = float(input('Digite seu salário: R$'))
aumento = (salario * 0.15) + salario

print(f'''Salário atual: R${salario}
Reajuste 15%
Novo salário: R${aumento:.2f}''')