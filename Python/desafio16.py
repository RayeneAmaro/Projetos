import math

num = float(input('Digite um número: '))

print(f'\n\nO número digitado foi: {num} \nArredondado é igual a {math.floor(num)}\n\n')

print(f'O número digitado foi: {num} \nSua porção inteira é {math.trunc(num)}\n\n')

print(f'O número digitado foi: {num} \nSua porção inteira é {int(num)}\n\n')