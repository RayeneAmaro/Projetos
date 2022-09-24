from math import radians, sin, cos, tan

angulo = float(input('Digite o ângulo que você deseja: '))
seno = sin(radians(angulo))
#vai converter o angulo pra radianos e calcular o seno
con = cos(radians(angulo))
#vai converter o angulo pra radianos e calcular o cosseno
tan = tan(radians(angulo))
#vai converter o angulo pra radianos e calcular a tangente

print(f'O ângulo de {angulo} tem o SENO de {seno:.2f}, o COSSENO de {con:.2f} e a TANGENTE de {tan:.2f}')