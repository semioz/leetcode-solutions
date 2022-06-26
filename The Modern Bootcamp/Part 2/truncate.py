#Write a function that will shorten a string to a specified length, and add "..." to the end.  Given a string and a number n characters. 

def truncate(text,num):
    if num < 3:
        return "Truncation must be at least 3 characters." 
    elif num > len(text) + 3:
        return text
    else:
        return text[:(num-3)] + "..."