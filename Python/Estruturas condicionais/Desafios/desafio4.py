#Custo da viagem
#Desenvolva um programa que pergunte a distância de uma viagem em KM.
#Calcule o preço da passagem, cobrando R$0.50 por km para viagens de até 200km
#e R$0.45 para viagens mais longas

nome = input('Qual seu nome: ')
distancia = float(input('Digite a distância da viagem: '))

if distancia <= 200:
    preco = distancia * 0.50
    print(f'Olá {nome}, o valor da passagem é de R${preco}')
else:
    preco = distancia * 0.45
    print(f'Olá {nome}, valor da passagem é de R${preco}')