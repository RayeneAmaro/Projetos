#Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos digitos separados
#Ex: Digite um número: 1834
#unidade: 4
#dezena: 3
#centena: 8
#milhar: 1

num = input('Digite um número de 0 a 9999: ')
qtd = len(num)

if qtd < 2:
    print(f'unidade: {num[0]}')
elif qtd > 1 and qtd <3:
    print(f'''
            unidade: {num[1]}
            dezena : {num[0]}
          ''')
elif qtd >= 3 and qtd < 4:
    print(f'''
            unidade: {num[2]}
            dezena : {num[1]}
            centena: {num[0]}
          ''')
elif qtd == 4:
    print(f'''
            unidade: {num[3]}
            dezena : {num[2]}
            centena: {num[1]}
            milhar : {num[0]}''')
else:
    print('Valor invalido!')