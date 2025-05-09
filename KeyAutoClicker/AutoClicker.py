import pydirectinput
import time
import keyboard

def press_space():
    try:
        while not keyboard.is_pressed('`'):  # Stop with backtick (`) key
            pydirectinput.press('space')  # Jump
            time.sleep(4)
            pydirectinput.press('w')  # Move forward
            time.sleep(3)
            pydirectinput.press('s')  # Move backward
            time.sleep(4)
    except KeyboardInterrupt:
        print("\nScript stopped by user.")

press_space()
