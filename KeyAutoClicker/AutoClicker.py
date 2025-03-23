import keyboard
import time

def press_space():
    while True:
        keyboard.press('space')
        keyboard.release('space')
        time.sleep(2)

press_space() 
