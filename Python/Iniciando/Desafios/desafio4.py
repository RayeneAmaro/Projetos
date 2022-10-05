digitar = input('Digite algo no teclado: ')

print(f'Tipo: {type(digitar)}')
print(f'É número? {digitar.isnumeric()}')
print(f'São letras? {digitar.isalpha()}')
print(f'É alfanumérico? {digitar. isalnum()}')
print(f'Esta tudo em maiusculo? {digitar.isupper()}')
print(f'Esta tudo em minusculo? {digitar.islower()}')