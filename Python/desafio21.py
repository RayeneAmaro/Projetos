from pygame import mixer

#pygame é pra jogos
#se importar o pygame (import pygame) é preciso inicializar ele (pygame.init())

mixer.init()
mixer.music.load('diasdeguerra.mp3')
mixer.music.play()

import time
time.sleep(360)