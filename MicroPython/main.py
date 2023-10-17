"""
Created by:cedric
Created on: oct 2023
This module is a Micro:bit MicroPython program
neopixel_random.py
"""
from microbit import *
import neopixel
from random import randint

np = neopixel.NeoPixel(pin16, 4)

while True:
if button_a.is_pressed():

for pixel_id in range(0, len(np)):
    red = randint(0, 255)
Green = randint(0, 255)
yellow = randint(0, 255)
# Assign the current LED a random red, green and blue value between 0 and 255

np[pixel_id] = (red, Green, yellow,)

# red
print(np[0])
np[0] = (255, 0, 0,)
np.show()
sleep(1000)
np[0] = (0, 0, 0,)
sleep(1000)
np.show()

# yellow
print(np[-1])
np[1] = (255, 255, 0,)
np.show()
sleep(1000)
np[1] = (0, 0, 0)
sleep(1000)
np.show()

# green

print(np[-2])
np[2] = (0, 225, 0,)
np.show()
sleep(1000)
np[2] = (0, 0, 0)
np.show()
sleep(1000)

# Display the current pixel data on the Neopixel strip
np.show()
sleep(1000)
np.clear()