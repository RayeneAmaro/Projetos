preco = float(input('Digite o valor do produto: R$'))
desconto = preco - (preco * 0.05)

print(f'Produto com valor de R${preco}, com desconto de 5% fica o total de R${desconto:.2f}')