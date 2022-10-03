#Faça um programa que leia uma frase pelo teclado e mostre:
frase = str(input('Digite uma frase: ')).lower().strip()

# - Quantas vezes aparece a letra "A"
print(f"A letra 'a' aparece {frase.count('a')} vezes na frase")


# - Em que posição ela aparece a primeira vez
print(f"A primeira letra 'a' apareceu na posição {frase.find('a')+1}")


# - Em que posição ela aparece a última vez
print(f"A última letra 'a' apareceu na posição {frase.rfind('a')+1}")
