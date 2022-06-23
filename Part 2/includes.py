if msg.startswith("$translate"):
    text = msg.split("$translate ",1)[1]
    lang = msg.split("$translate ",2)[2]
