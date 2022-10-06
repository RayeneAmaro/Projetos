#Radar eletrônico

#Escreva um programa que leia a velocidade de um carro.
#Se ele ultrapassar 80km/h, mostre a mensagem dizendo que
#ele foi multado.
#A multa vai custar R$7,00 por cada KM acima do limite.


vel = float(input('Qual a velocidade? '))
multa = 7.00

if vel > 80:
    multado = (vel - 80.00) * multa
    print(f'''Você passou a {vel}km/h enquanto o limite era de 80km/h e por isso foi multado.
O valor total da multa é de R$ {multado}''')