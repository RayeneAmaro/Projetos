from random import choice

n1 = input('Primeiro aluno: '   )
n2 = input('Segundo aluno: '    )
n3 = input('Terceiro aluno: '   )
n4 = input('Quarto aluno: '     )

lista = [n1, n2, n3, n4]

escolhido = choice(lista)

print(f'O aluno escolhido para apagar o quadro foi: {escolhido}')