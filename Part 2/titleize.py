#Write a function which accepts a string of words and returns a new string with the first letter of every word in the string capitalized.
def titleize(string):
    return ' '.join(w[0].upper() + w[1:] for w in string.split(' '))