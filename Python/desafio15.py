dias = int(input('Digite quantos dias ficou com o carro: '))
km = float(input('Digite a quantidade de km rodados: '))
valor = (60 * dias) + (0.15 * km)

print(f'Você ficou {dias} dias com o carro e rodou {km:.1f} km, o valor total que terá que pagar é de R${valor:.2f}')